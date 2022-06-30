import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ClientService } from 'src/app/shared/services/client.service';
import { TokenService } from 'src/app/shared/services/token.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-validation-client',
  templateUrl: './validation-client.component.html',
  styleUrls: ['./validation-client.component.scss']
})
export class ValidationClientComponent implements OnInit {
  // Definir titulo y subtitulo En formulario
  title = "Autenticación de Credenciales";
  messagge = "Ingresa tu Número Telefónico y Carnet de Identidad y Disfruta de Nuevas Ofertas en Productos y/o Sericios";
  // definir valores de evaluacion numeros y alfa numericos
  dniClientPattern = /^[A-Za-z0-9]+$/;
  mobilNumPattern = /^[0-9]+$/;
  // definir variables response de token y de cliente
  autentication: any;
  infoClient: any;
  // definicion de valoracion de campos de formulario
  validationForm = new FormGroup({
    'dni': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(this.dniClientPattern)]),
    'subscriberId': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.mobilNumPattern)])
  });

  constructor(private clientService: ClientService, 
              private  tokenService: TokenService, 
              private router: Router, 
              private route: ActivatedRoute) {
    this.autentication = {};
    this.infoClient = {};
  }

  ngOnInit() {
    // obtencion de token desde inicio
    this.getToken();
  }

  /**
   * Metodo de ejecucion desde interface tras validacion de campos
   */
  onSubmit() {
    // defniri variables obtencion dato formulario
    let phone:string= "";
    let dni:string= "";
    if (this.validationForm.valid) {
      // asignacion de datos rescatados en formulario
      phone = this.validationForm.value.subscriberId!;
      if (this.autentication["responseCode"] == "OK") {
        //console.log(this.autentication);
        this.clientService.getClientByMovil(phone, this.autentication["data"]["token"])
        .subscribe(
          response => {
            this.infoClient = response;
            if (this.infoClient["data"]["data"].length == 1) {
              this.router.navigate([`/oferta`]);
            } else {
              this.getClientByDni(dni, this.autentication["data"]["token"]);
            }
          },
          error => {
            console.log(error);
          });
        
      } else {

      }
      
      dni = this.validationForm.value.dni!;
      
    } else {
      alert("ERROR!");
    }
  }
  
  /**
   * Metodo de obtencion de invocacion a Servicios search tocken
   */
  getToken() {
    this.tokenService.gettoken()
      .subscribe(
        response => {
          this.autentication = response;
          console.log(this.autentication);
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
          console.log(this.infoClient);
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

  get dni() {
    return this.validationForm.get('dni');
  }
  get subscriberId() {
    return this.validationForm.get('subscriberId');
  }

}

