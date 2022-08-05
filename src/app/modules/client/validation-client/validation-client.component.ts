import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanSelectedComponent } from '@app/modal/plan-selected/plan-selected.component';
import { InfoClientService } from '@app/services/info-client.service';
import { PlanListService } from '@app/services/plan-list.service';
import { ScoringValidationService } from '@app/services/scoring-validation.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { NgxCaptchaService } from '@binssoft/ngx-captcha';
import { PlanComposition } from '@models/PlanComposition';
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
  dataClient: any;
  translogSMS: any;
  planCompositionCode: any;
  planComposition?: PlanComposition;
  armadoScoring?: any;
  planList: any;
  fecha: string = "";
  productTypeCode: any;
  submitted: boolean = false;
  // definicion de valoracion de campos de formulario
  validationForm = new FormGroup({
    'dni': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(this.dniClientPattern)]),
    'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nameClient)]),
    'lastname': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nameClient)]),
    'subscriberId': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.mobilNumPattern)]),
    'captcha_status': new FormControl(null, [Validators.required])
  });

  // Variables captcha
  captchaStatus: any = '';
  captchaConfig: any = {
    type: 1,
    length: 6,
    cssClass: 'custom',
    back: {
      stroke: "#2F9688",
      solid: "#f2efd2"
    },
    font: {
      color: "#000000",
      size: "35px"
    }
  };
  captch_input: any;
  resultCode: any;
  scoringValid: any;
  planesList: any;

  constructor(private captchaService: NgxCaptchaService,
    private clientService: ClientService,
    private tokenService: TokenService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    private captchService: CaptchaService,
    private scoringValidationService: ScoringValidationService,
    private planListService: PlanListService,
    private webstoreservice: WebstoreService) {

    this.autentication = {};
    this.infoClient = {};
    this.scoringValid = {};
    this.planesList = {};
    this.today = new Date();
    this.validationCaptcha();
  }

  ngOnInit(): void {
    this.getToken();
    this.armarDate();
  }

  validationCaptcha() {
    this.captchService.captchStatus.subscribe((status) => {
      this.captchaStatus = status;
      if (status == false) {
        alert("Opps!\nEl Captcha es incorrecto, intente de nuevo");
        this.validationForm.patchValue({ "captcha_status": status });
      } else if (status == true) {
        this.validationForm.patchValue({ "captcha_status": status });
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
        },
        error => {
          console.log(error);
        });
  }

  armarDate() {
    let date: Date = new Date();
    let anio = date.getFullYear();
    let dia = date.getDate();
    let mes = date.getMonth();
    var dia2 = "";
    var mes2 = "";
    if (dia.toString.length == 1) {
      dia2 = "0" + dia.toString();
    } else {
      dia2 = dia.toString();
    }
    if (mes.toString.length == 1) {
      mes2 = "0" + mes.toString();
    } else {
      mes2 = mes.toString();
    }
    this.fecha = dia2 + "-" + mes2 + "-" + anio.toString();
  }

  /*
  getCode() {
    var counter = 0;
    var code;
    while (counter == 0) {
      code = Math.floor(Math.random() * 9999);
      if (String(code).length == 4) {
        counter = 1;
      }
    }
    return code;
  }
*/

  /**
   * Metodo de ejecucion desde interface tras validacion de campos
   */
  onSubmit() {
    // defniri variables obtencion dato formulario
    this.planComposition = this.webstoreservice.getPlanComposition();
    let flagPlan = this.planComposition?.planCompositionCode;
    let statusPlan = false;
    let phone: string = "";
    let dni: string = "";
    let name1: string = "";
    let lastname1: string = "";
    console.log(flagPlan);
    if (flagPlan != "undefined" || flagPlan != null) {
      statusPlan = true;
    }
    if (statusPlan) {
      if (this.validationForm.valid && this.captchaStatus) {
        // asignacion de datos rescatados en formulario
        phone = this.validationForm.value.subscriberId!;
        dni = this.validationForm.value.dni!;
        name1 = this.validationForm.value.name!;
        lastname1 = this.validationForm.value.lastname!;
        //this.getClientByDni(dni, name1, lastname1, this.autentication["data"]["token"]);
        sessionStorage.setItem("key", this.autentication["data"]["token"]);

        this.clientService.getClientByDNI(dni, this.autentication["data"]["token"])
          .subscribe(
            response => {
              this.infoClient = response;
              //console.log(this.infoClient);
              this.dataClient = this.infoClient["data"]["data"][0];
              if (this.infoClient["data"]["data"].length == 1) {
                if (this.infoClient["data"]["data"]["0"]["clientId"] != "null" || this.infoClient["data"]["data"]["0"]["clientId"] != "NULL") {
                  //this.webstoreservice.saveClientInformation(this.infoClient["data"]["data"]["0"]);
                  this.submitted = true;
                  this.webstoreservice.saveClientInformation(this.dataClient);
                  //console.log(this.planesList);
                  const planService = this.armadoJsonScoring();
                  console.log(planService);
                  this.scoringValidated(planService);
                  //this.router.navigate([`/adminClient`]);
                  ///this.abrirDialogo();
                } else {
                  this.submitted = true;
                  //sessionStorage.setItem("infoClientStorage", this.infoClient["data"]["data"][0]);
                  //this.webstoreservice.saveClientInformation(this.infoClient["data"]["data"]["0"]);
                  this.webstoreservice.saveClientInformation(this.dataClient);
                  //sessionStorage.setItem("flowType", "NORMAL");
                  this.webstoreservice.saveStatusScoring("NORMAL");
                  this.router.navigate(['/oferta/orden-compra']);
                  //alert("Usted no puede efectuar Compra Directa \n" + "Lo invitamos a pasar por la tienda mas cercana para efectuar la compra del Plan");
                }
                //this.router.navigate([`/adminClient`]);
              } else {
                this.submitted = true;
                /**
                const datosClient = JSON.stringify({
                  "birthday": null,
                  "clientId": null,
                  "documentCity": null,
                  "documentCityDesc": null,
                  "documentNumber": "2721687",
                  "documentType": "CI",
                  "documentTypeDesc": null,
                  "email": null,
                  "fullName": null,
                  "gender": null,
                  "lastName1": lastname1,
                  "lastName2": null,
                  "middleName": null,
                  "name": name1,
                  "nit": null,
                  "personId": null,
                  "personTypeCode": null
                });
                 */

                var datosClient2:any = [];
                datosClient2["birthday"] = null;
                datosClient2["clientId"] = null;
                datosClient2["documentCity"] = null;
                datosClient2["documentCityDesc"] = null;
                datosClient2["documentNumber"] = dni;
                datosClient2["documentType"] = "CI";
                datosClient2["documentTypeDesc"] = null;
                datosClient2["email"] = null;
                datosClient2["fullName"] = null;
                datosClient2["gender"] = null;
                datosClient2["lastName1"] = lastname1;
                datosClient2["lastName2"] = null;
                datosClient2["middleName"] = null;
                datosClient2["name"] = name1;
                datosClient2["nit"] = null;
                datosClient2["personId"] = null;
                datosClient2["personTypeCode"] = null;




                //sessionStorage.setItem("infoClientStorage", datosClient);
                this.webstoreservice.saveClientInformation(datosClient2);
                //sessionStorage.setItem("flowType", "NORMAL");
                this.webstoreservice.saveStatusScoring("NORMAL");
                this.router.navigate(['/oferta/orden-compra']);

                //alert("Usted no puede efectuar Compra Directa \n"+ "Lo invitamos a pasar por la tienda mas cercana para efectuar la compra del Plan");
                //this.getClientByDni(dni, this.autentication["data"]["token"]);
              }
            },
            error => {
              console.log(error);
            });


        /**
        if (this.autentication["responseCode"] == "OK") {
          sessionStorage.setItem("key", this.autentication["data"]["token"]);
          this.clientService.getClientByMovil(phone, this.autentication["data"]["token"])
            .subscribe(
              response => {
                this.infoClient = response;
                this.dataClient = this.infoClient["data"]["data"][0];
                console.log(this.infoClient["data"]["data"][0]);
                if (this.infoClient["data"]["data"].length == 1) {
                  if (this.infoClient["data"]["data"]["0"]["clientId"] != "null" || this.infoClient["data"]["data"]["0"]["clientId"] != "NULL") {
                    //sessionStorage.setItem("infoClientStorage", this.infoClient["data"]["data"][0]);
                    console.log(this.dataClient);
                    this.webstoreservice.saveClientInformation(this.dataClient);
                    sessionStorage.setItem("infoClientStorage", this.dataClient);
                    this.router.navigate(['/client/adminClient']);
                    //console.log(this.planesList);
                    const planService = this.armadoJsonScoring();
                    this.scoringValidated(planService);
                    //console.log(this.infoClient["data"]["data"]);
                    //
                    ///this.abrirDialogo();
                  } else {
                    //sessionStorage.setItem("infoClientStorage", this.infoClient["data"]["data"][0]);
                    this.webstoreservice.saveClientInformation(this.infoClient["data"]["data"]["0"]);
                    sessionStorage.setItem("flowType", "NORMAL");
                    this.router.navigate(['/oferta/orden-compra']);
                  }
                } else {
                  dni = this.validationForm.value.dni!;
                  name1 = this.validationForm.value.name!;
                  lastname1 = this.validationForm.value.lastname!;
                  this.getClientByDni(dni, name1, lastname1, this.autentication["data"]["token"]);
                }
              },
              error => {
                console.log(error);
              });

        } else {
          alert("Recargue la Pagina y vuelva a intentarlo");
        }
         */
      } else {
        alert("Verificque que el formulario esta bien llenado \n "
          + "¡Autentique nuevamente sus datos! \n"
          + "Y/o Valide nuevamente el Captcha si es necesario");
      }
    } else {
      //this.router.navigate(['/oferta/orden-compra']);
      alert("Para poder adquirir un servicio, debe previamente haber elegido la opcion en pagina de la empresa");
      window.location.href = "https://www.viva.com.bo/";
    }
  }

  /**
   * Metodo de obtencion de invocacion a Servicios search tocken
   
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


            }

          }

        },
        error => {
          console.log(error);
        });

  }
*/


  armadoJsonScoring() {
    this.planComposition = this.webstoreservice.getPlanComposition();
    this.planList = this.planComposition?.planList;
    console.log(this.planComposition);
    console.log(this.planList);
    this.productTypeCode = [];
    for (let index = 0; index < this.planList.length; index++) {
      this.productTypeCode.push(this.planList[index]["consumptionEntityType"]);
    }
    this.armadoScoring = JSON.stringify({
      "client": {
        "clientId": this.infoClient["data"]["data"]["0"]["clientId"]
      },
      "commercialOffer": {
        "groupPlan": this.planComposition?.planCompositionCode,
        "productTypeCode": this.productTypeCode
      },
      "saleOrder": {
        "planCode": "1",
        "processTypeCode": "PTFSALE",
        "channelCode": "CAASES",
        "cityCode": "CBA",
        "price": this.planComposition?.tariff,
        "creationDate": this.fecha,
        "serviceQuantity": this.planComposition?.numberOfEntities,
        "hasSubsidyOfEquipmentInSale": "NO"
      },
      "userId": 21
    });
    console.log(this.armadoScoring);
    return this.armadoScoring;
  }

  scoringValidated(planService: any) {
    console.log("scoring Json INI");
    console.log(planService);
    console.log("scoring Json End");
    this.scoringValidationService.getValidationClientScoring(planService, this.autentication["data"]["token"]).subscribe(
      response => {
        this.scoringValid = response;
        //sessionStorage.setItem("flowType", this.scoringValid["data"]["flowType"]);
        this.webstoreservice.saveStatusScoring(this.scoringValid["data"]["flowType"]);
        this.router.navigate(['/oferta/orden-compra']);
      },
      error => {
        console.log(error);
      });
  }

  /**
   * Metodo de obtencion de invocacion a Servicios search tocken
   */
  getClientByDni(dni: String, name1: String, lastname1: String, token: String) {
    this.clientService.getClientByDNI(dni, token)
      .subscribe(
        response => {
          this.infoClient = response;
          //console.log(this.infoClient);
          this.dataClient = this.infoClient["data"]["data"][0];
          if (this.infoClient["data"]["data"].length == 1) {
            if (this.infoClient["data"]["data"]["0"]["clientId"] != "null" || this.infoClient["data"]["data"]["0"]["clientId"] != "NULL") {
              //this.webstoreservice.saveClientInformation(this.infoClient["data"]["data"]["0"]);
              this.webstoreservice.saveClientInformation(this.dataClient);
              //console.log(this.planesList);
              const planService = this.armadoJsonScoring();
              this.scoringValidated(planService);
              //this.router.navigate([`/adminClient`]);
              ///this.abrirDialogo();
            } else {
              //sessionStorage.setItem("infoClientStorage", this.infoClient["data"]["data"][0]);
              //this.webstoreservice.saveClientInformation(this.infoClient["data"]["data"]["0"]);
              this.webstoreservice.saveClientInformation(this.dataClient);
              sessionStorage.setItem("flowType", "NORMAL");
              this.router.navigate(['/oferta/orden-compra']);
              //alert("Usted no puede efectuar Compra Directa \n" + "Lo invitamos a pasar por la tienda mas cercana para efectuar la compra del Plan");
            }
            //this.router.navigate([`/adminClient`]);
          } else {
            const datosClient = JSON.stringify({
              "birthday": null,
              "clientId": null,
              "documentCity": null,
              "documentCityDesc": null,
              "documentNumber": "2721687",
              "documentType": "CI",
              "documentTypeDesc": null,
              "email": null,
              "fullName": null,
              "gender": null,
              "lastName1": lastname1,
              "lastName2": null,
              "middleName": null,
              "name": name1,
              "nit": null,
              "personId": null,
              "personTypeCode": null
            });

            //sessionStorage.setItem("infoClientStorage", datosClient);
            this.webstoreservice.saveClientInformation(datosClient);
            sessionStorage.setItem("flowType", "NORMAL");
            this.router.navigate(['/oferta/orden-compra']);

            //alert("Usted no puede efectuar Compra Directa \n"+ "Lo invitamos a pasar por la tienda mas cercana para efectuar la compra del Plan");
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
  /*
   abrirDialogo(phone: String) {
     //const dialogRef = this.dialog.open(ValidationSmsComponent, {width: '180px', {data: phone},});
     const dialogRef = this.dialog.open(PlanSelectedComponent, {
       width: '450px', data: phone
     });
 
     dialogRef.afterClosed().toPromise()
   }
   */

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
