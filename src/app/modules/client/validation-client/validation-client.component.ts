import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanSelectedComponent } from '@app/modal/plan-selected/plan-selected.component';
import { InfoClientService } from '@app/services/info-client.service';
import { PlanListService } from '@app/services/plan-list.service';
import { ScoringValidationService } from '@app/services/scoring-validation.service';
import { NgxCaptchaService } from '@binssoft/ngx-captcha';
import { CaptchaService } from 'src/app/core/services/captcha.service';
import { ClientService } from 'src/app/core/services/client.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-validation-client',
  templateUrl: './validation-client.component.html',
  styleUrls: ['./validation-client.component.scss']
})
export class ValidationClientComponent implements OnInit {
  //@Output() disparadorInfoClient: EventEmitter<any> = new EventEmitter(); 
  title = "Autenticación";
  messagge = "Ingresa tu Nombre Completo, Número Teléfonico y CI para acceder a nuestras Ofertas";
  today;
  // definir valores de evaluacion numeros y alfa numericos
  dniClientPattern = /^[A-Za-z0-9]+$/;
  nameClient = /^[A-Za-z\s]+$/;
  mobilNumPattern = /^[0-9]+$/;
  // definir variables response de token y de cliente
  autentication: any;
  infoClient: any;
  translogSMS: any;
  // definicion de valoracion de campos de formulario
  validationForm = new FormGroup({
    'dni': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(this.dniClientPattern)]),
    'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nameClient)]),
    'lastname': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nameClient)]),
    'subscriberId': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.mobilNumPattern)]),
    'captcha_status': new FormControl(null, [Validators.required])
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
  scoringValid: any;
  planesList: any;

  constructor(private captchaService:NgxCaptchaService,
              private clientService: ClientService, 
              private  tokenService: TokenService, 
              private router: Router, 
              private activeRoute: ActivatedRoute, 
              public dialog: MatDialog,
              private captchService: CaptchaService,
              private scoringValidationService: ScoringValidationService,
              private planListService: PlanListService) {
    
    this.autentication = {};
    this.infoClient = {};
    this.scoringValid = {};
    this.planesList = {};
    this.today = new Date();
    this.validationCaptcha();
  }

  ngOnInit(): void {
    this.getToken();
  }

  validationCaptcha() {
    this.captchService.captchStatus.subscribe((status)=>{
      this.captchaStatus = status;
      if (status == false) {
          alert("Opps!\nEl Captcha es incorrecto, intente de nuevo");
          this.validationForm.patchValue({"captcha_status": status});
      } else if (status == true)  {
        this.validationForm.patchValue({"captcha_status": status});
          //alert("Felicidades!!!\nCaptcha Valido");
      }
    });
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
    if (this.validationForm.valid && this.captchaStatus) {
      // asignacion de datos rescatados en formulario
      phone = this.validationForm.value.subscriberId!;
      if (this.autentication["responseCode"] == "OK") {
        sessionStorage.setItem("key", this.autentication["data"]["token"]);
        this.clientService.getClientByMovil(phone, this.autentication["data"]["token"])
        .subscribe(
          response => {
            this.infoClient = response;
            if (this.infoClient["data"]["data"].length == 1) {
              if (this.infoClient["data"]["data"]["0"]["clientId"] != "null" || this.infoClient["data"]["data"]["0"]["clientId"] != "NULL") {
                this.getPlansList();
                console.log(this.planesList);
                this.scoringValidated(this.infoClient["data"]["data"]["0"]["clientId"], phone);
                console.log(this.infoClient["data"]["data"]);
                //
                ///this.abrirDialogo();
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
      alert("Verificque que el formulario esta bien llenado \n "
            +"¡Autentique nuevamente sus datos! \n"
            +"Y/o Valide nuevamente el Captcha si es necesario");
    }
  }

  /**
   * Metodo de obtencion de invocacion a Servicios search tocken
   */
   getPlansList() {
    this.planListService.getPlanList(this.autentication["data"]["token"])
    .subscribe(
      response => {
        this.planesList = response;
        //console.log(this.planesList);
        const planDataList = this.planesList["data"]["data"];
        for (let index = 0; index < planDataList.length; index++) {
          //console.log(indiceDeTres[index]["planCompositionCode"]);
          if (planDataList[index]["planCompositionCode"] == "PMBAP") {
            const planCode = planDataList[index]["planCompositionCode"];
            const planValue = planDataList[index]["planList"];
            const planPrice = planDataList[index]["tariff"];
            const qServices = planDataList[index]["numberOfEntities"];
            const productTypeCode = [];
            console.log(planValue);
            for (let index = 0; index < planValue.length; index++) {
              productTypeCode.push(planValue[index]["consumptionEntityType"]);
            }
            console.log(planDataList[index]);
            console.log(planValue);

            const jsontext = JSON.stringify({
              "client": {
                  "clientId": this.infoClient["data"]["data"]["0"]["clientId"]
                },
                "commercialOffer": {
                  "productTypeCode": productTypeCode,
                  "groupPlan": planCode
                },
                "saleOrder": {
                  "planCode": "1",
                  "processTypeCode": "PTFSALE",
                  "channelCode": "CAASES",
                  "cityCode": "CBA",
                  "price": planPrice,
                  "creationDate": "28-07-2022",
                  "serviceQuantity": qServices,
                  "hasSubsidyOfEquipmentInSale": "NO"
                },
                "userId": 21
              });

            console.log(jsontext);
          }
          
        }

      },
      error => {
        console.log(error);
      });
    
  }

  scoringValidated(clientId: string, phone:string){
    this.scoringValidationService.getValidationClientScoring(clientId, this.autentication["data"]["token"]).subscribe(
        response => {
          this.scoringValid = response;
          if (this.scoringValid["data"]["flowType"] == "NORMAL") {
            this.abrirDialogo(phone);
          } else {
            this.router.navigate([`client/adminClient`, phone]);
          }
          console.log(this.scoringValid);
          console.log(this.scoringValid["data"]["flowType"]);
          //this.abrirDialogo();
        },
        error => {
          console.log(error);
        });
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
            if (this.infoClient["data"]["data"]["0"]["clientId"] != "null" || this.infoClient["data"]["data"]["0"]["clientId"] != "NULL") {
              console.log(this.infoClient["data"]["data"]);


              this.router.navigate([`/adminClient`]);
              ///this.abrirDialogo();
            } else {
              alert("Usted no puede efectuar Compra Directa \n"
                    +"Lo invitamos a pasar por la tienda mas cercana para efectuar la compra del Plan");
            }
            //this.router.navigate([`/adminClient`]);
          } else {
            alert("Usted no puede efectuar Compra Directa \n"
                +"Lo invitamos a pasar por la tienda mas cercana para efectuar la compra del Plan");
            //this.getClientByDni(dni, this.autentication["data"]["token"]);
          }
        },
        error => {
          console.log(error);
        });
  }

/*
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
*/

  /*
   * Metodo de apertura de ventana emergente
  */
  abrirDialogo(phone: String) {
    //const dialogRef = this.dialog.open(ValidationSmsComponent, {width: '180px', {data: phone},});
    const dialogRef = this.dialog.open(PlanSelectedComponent, {
      width: '450px', data: phone
    });

    dialogRef.afterClosed().toPromise()
  }

  get dni() {
    return this.validationForm.get('dni');
  }

  get subscriberId() {
    return this.validationForm.get('subscriberId');
  }

  get name() {
    return this.validationForm.get('name');
  }

  get lastname() {
    return this.validationForm.get('lastname');
  }

  get captcha_status() {
    return this.validationForm.get('captcha_status');
  }

  
}
