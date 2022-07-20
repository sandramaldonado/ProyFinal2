import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptchaService } from '@binssoft/ngx-captcha';
import { ValidationSmsComponent } from '@app/modal/validation-sms/validation-sms.component';
import { ClientService } from '@services/client.service';
import { TokenService } from '@services/token.service';
import { TranslogSmsService } from 'src/app/shared/services/translog-sms.service';

@Component({
  selector: 'app-validation-client',
  templateUrl: './validation-client.component.html',
  styleUrls: ['./validation-client.component.scss']
})
export class ValidationClientComponent implements OnInit {
  title = "Validación";
  messagge = "Ingresa tu Teléfonico y CI para acceder a nuestras Ofertas";
  today;
  // definir valores de evaluacion numeros y alfa numericos
  dniClientPattern = /^[A-Za-z0-9]+$/;
  mobilNumPattern = /^[0-9]+$/;
  // definir variables response de token y de cliente
  autentication: any;
  infoClient: any;
  translogSMS: any;
  // definicion de valoracion de campos de formulario
  validationForm = new FormGroup({
    'dni': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(this.dniClientPattern)]),
    'subscriberId': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.mobilNumPattern)])
  });
  
  // Variables captcha
  captchaStatus:any = '';
  captchaConfig:any = {
    type:1, 
    length:6, 
    cssClass:'custom',
    back: {
      stroke:"#2F9688",
      solid:"#f2efd2"
    }, 
    font:{
      color:"#000000", 
      size:"35px"
    }
  };
  captch_input: any;
  resultCode: any;

  constructor(private captchaService:NgxCaptchaService,
              private clientService: ClientService, 
              private  tokenService: TokenService, 
              private  translogSmsService: TranslogSmsService, 
              private router: Router, 
              private route: ActivatedRoute, 
              public dialog: MatDialog) {
    this.autentication = {};
    this.infoClient = {};
    this.today = new Date();
    this.captchaService.captchStatus.subscribe((status)=>{
      this.captchaStatus = status;
      if (status == false) {
          alert("Opps!\nCaptcha mismatch")
      } else if (status == true)  {
          alert("Success!\nYou are right")
      }
    });

  }

  ngOnInit(): void {
    this.getToken();
  }

  /**
   * Metodo de obtencion de invocacion a Servicios search tocken
   */
   getToken() {
    this.tokenService.gettoken()
      .subscribe(
        response => {
          this.autentication = response;
          //console.log(this.autentication);
        },
        error => {
          console.log(error);
        });
  }

  getCode() {
    var counter = 0;
    var code;
    while (counter == 0) {
      code =  Math.floor(Math.random() * 9999);
      if (String(code).length == 4) {
        counter = 1;
      }  
    }
    return code;
  }

  /**
   * Metodo de ejecucion desde interface tras validacion de campos
   */
   onSubmit() {
    // defniri variables obtencion dato formulario
    let phone:string= "";
    let dni:string= "";
    //this.checkCaptcha();
    if (this.validationForm.valid) {
      // asignacion de datos rescatados en formulario
      phone = this.validationForm.value.subscriberId!;
      if (this.autentication["responseCode"] == "OK") {
        this.clientService.getClientByMovil(phone, this.autentication["data"]["token"])
        .subscribe(
          response => {
            this.infoClient = response;
            console.log(this.infoClient["data"]["data"]["0"]["clientId"]);
            if (this.infoClient["data"]["data"].length == 1) {
              if (this.infoClient["data"]["data"]["0"]["clientId"] != "null" || this.infoClient["data"]["data"]["0"]["clientId"] != "NULL") {
                this.sendSMS(phone);
                this.abrirDialogo(phone);
              } else {

              }
              
            } else {
              dni = this.validationForm.value.dni!;
              this.getClientByDni(dni, this.autentication["data"]["token"]);
            }
          },
          error => {
            console.log(error);
          });
        
      } else {
        alert("Recargue la Pagina y vuelva a intentarlo");
      }
    } else {
      alert("verificque que el formulario esta bien llenado \n "
            +"¡Autentique nuevamente sus datos!");
    }
  }

  /**
   * Metodo de obtencion de invocacion a Servicios search tocken
   */
   getClientByDni(dni:String, token:String) {
    this.clientService.getClientByDNI(dni, token)
      .subscribe(
        response => {
          this.infoClient = response;
          //console.log(this.infoClient);
          if (this.infoClient["data"]["data"].length == 1) {
            this.router.navigate([`/oferta`]);
          } else {
            this.getClientByDni(dni, this.autentication["data"]["token"]);
          }
        },
        error => {
          console.log(error);
        });
  }

  sendSMS(phone: String) {
    const randomeCode = this.getCode();
    const message = "Tu linea fue valida ingresE el sigiente codigo para acceder a nuestras ofertas " + randomeCode;
    const requestStr = "<soapenv:Envelope xmlns:soapenv='http://schemas.xmlsoap.org/soap/envelope/' xmlns:vas='http://vas.nuevatel.com/'><soapenv:Header/><soapenv:Body><vas:execute><!--Optional:--><arg0>10039</arg0><!--Zero or more repetitions:--><arg1>103</arg1><arg1>"+phone+"</arg1><arg1>"+message+"</arg1></vas:execute></soapenv:Body></soapenv:Envelope>";
    this.translogSMS = {"id":3,"subscriberId":phone,"code":randomeCode,"metodo":"sendSMS","request":requestStr,"response":"OK","user":"vzurita","fecha":this.today,"state":"0"};

    this.translogSmsService.setTranslogSMS(this.translogSMS)
      .subscribe(
        response => {
          this.translogSMS = response;
          console.log(this.translogSMS);
        },
        error => {
          console.log(error);
        });
  } 

  /*
   * Metodo de apertura de ventana emergente
  */
  abrirDialogo(phone: string) {
    //const dialogRef = this.dialog.open(ValidationSmsComponent, {width: '180px', {data: phone},});
    const dialogRef = this.dialog.open(ValidationSmsComponent, {
      width: '450px',
      data: {data: phone},
    });

    dialogRef.afterClosed().toPromise()
  }

  get dni() {
    return this.validationForm.get('dni');
  }

  get subscriberId() {
    return this.validationForm.get('subscriberId');
  }

}
