import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanListService } from '@app/services/plan-list.service';
import { ScoringValidationService } from '@app/services/scoring-validation.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { NgxCaptchaService } from '@binssoft/ngx-captcha';
import { PlanComposition } from '@models/PlanComposition';
import { CaptchaService } from 'src/app/core/services/captcha.service';
import { ClientService } from 'src/app/core/services/client.service';
import { TokenService } from 'src/app/core/services/token.service';
import { OrdersService } from 'src/app/core/services/orders.service';
import * as moment from 'moment';

@Component({
  selector: 'app-validation-client',
  templateUrl: './validation-client.component.html',
  styleUrls: ['./validation-client.component.scss']
})
export class ValidationClientComponent implements OnInit {
  // variables de planes y scoring
  planComposition?: PlanComposition;
  armadoScoring?: any;
  scoringValid: any;
  planList: any;
  productTypeCode: any;

  // definir valores de evaluacion numeros y alfa numericos
  dniClientPattern = /^[A-Za-z0-9]+$/;
  nameClient = /^[A-Za-z\s]+$/;
  mobilNumPattern = /^[0-9]+$/;
  // definir variables response de token y de cliente
  validationForm = new FormGroup({
    'dni': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(this.dniClientPattern)]),
    'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nameClient)]),
    'lastname': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nameClient)]),
    'subscriberId': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.mobilNumPattern)]),
    'captcha_status': new FormControl(null, [Validators.required])
  });
  // variables contenidos cliente xistente o no
  infoClient: any;

  //datos adicionales
  submitted: boolean = false;
  fecha: string = "";
  autentication: any;

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

  constructor(private clientService: ClientService,
    private tokenService: TokenService,
    private router: Router,
    public dialog: MatDialog,
    private captchService: CaptchaService,
    private scoringValidationService: ScoringValidationService,
    private ordersService: OrdersService,
    private webstoreservice: WebstoreService) {

    this.autentication = {};
    this.infoClient = {};
    this.scoringValid = {};

    this.validationCaptcha();
  }

  ngOnInit(): void {
    this.getToken();
    this.setDate();
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

  /**
   * Metodo de obtencion de fecha en formato dd-mm-yyyy
   */
  setDate() {

    /*
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
    */

    let actualDate = moment().format('DD-MM-YYYY').toString();
    console.log(actualDate);
    this.fecha = actualDate;

  }

  /**
   * Metodo de validacion de datos introducidos en el captcha
  */
  validationCaptcha() {
    this.captchService.captchStatus.subscribe((status) => {
      this.captchaStatus = status;
      if (status == false) {
        alert("Opps!\nEl Captcha es incorrecto, intente de nuevo");
        this.validationForm.patchValue({ "captcha_status": status });
      } else if (status == true) {
        this.validationForm.patchValue({ "captcha_status": status });
      }
    });
  }

  /**
   * Metodo de ejecucion desde interface tras validacion de campos
   */
  onSubmit() {
    // obtencion plan vinculado a solicitud de compra
    this.planComposition = this.webstoreservice.getPlanComposition();
    let flagPlan = this.planComposition?.planCompositionCode;
    let statusPlan = false;
    let phone: string = "";
    let dni: string = "";
    let name1: string = "";
    let lastname1: string = "";
    let dataClient: any;
    // definir si existe algun plan antes de ejecutar busqueda de ofertas y llenado de formularios
    if (flagPlan != "undefined" || flagPlan != null) {
      statusPlan = true;
    }
    if (statusPlan) {
      // Validacion de formulario de pantalla
      if (this.validationForm.valid && this.captchaStatus) {
        // asignacion de datos rescatados en formulario
        phone = this.validationForm.value.subscriberId!;
        dni = this.validationForm.value.dni!;
        name1 = this.validationForm.value.name!;
        lastname1 = this.validationForm.value.lastname!;
        // Transferir el codigo session del token consultado
        sessionStorage.setItem("key", this.autentication["data"]["token"]);

        this.clientService.getClientByDNI(dni, this.autentication["data"]["token"])
          .subscribe(
            response => {
              this.infoClient = response;
              dataClient = this.infoClient["data"]["data"][0];
              console.log(dataClient);
              if (this.infoClient["data"]["data"].length == 1) {
                if (this.infoClient["data"]["data"]["0"]["clientId"] != "null" || this.infoClient["data"]["data"]["0"]["clientId"] != "NULL") {
                  this.submitted = true;
                  this.webstoreservice.saveClientInformation(dataClient);
                  const planService = this.armadoJsonScoring();
                  console.log(planService);
                  this.scoringValidated(planService);
                } else {
                  this.submitted = true;
                  this.webstoreservice.saveClientInformation(dataClient);
                  this.webstoreservice.saveStatusScoring("NORMAL");
                  this.router.navigate(['/client/adminClient']);
                  //this.router.navigate(['/oferta/orden-compra']);
                }
              } else {
                this.submitted = true;

                var datosClient2:any = {};
                datosClient2["birthday"] = null;
                datosClient2["clientId"] = null;
                datosClient2["documentCity"] = "CCBA";
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
                datosClient2["personTypeCode"] = "NATURAL";
                console.log(datosClient2);
                this.webstoreservice.saveClientInformation(datosClient2);
                this.webstoreservice.saveStatusScoring("NORMAL");
                this.createPerson();
                //this.router.navigate(['/oferta/orden-compra']);
              }
            },
            error => {
              console.log(error);
            });
      } else {
        alert("Verificque que el formulario esta bien llenado \n "
          + "¡Autentique nuevamente sus datos! \n"
          + "Y/o Valide nuevamente el Captcha si es necesario");
      }
    } else {
      alert("Para poder adquirir un servicio, debe previamente haber elegido la opcion en pagina de la empresa");
      window.location.href = "https://www.viva.com.bo/";
    }
  }

  armadoJsonScoring() {
    this.planComposition = this.webstoreservice.getPlanComposition();
    this.planList = this.planComposition?.planList;
    console.log(this.planComposition);
    console.log(this.planList);
    this.productTypeCode = [];
    console.log(this.fecha);
    const client = this.webstoreservice.getClientInformation();
    for (let index = 0; index < this.planList.length; index++) {
      this.productTypeCode.push(this.planList[index]["consumptionEntityType"]);
    }
    this.armadoScoring = JSON.stringify({
      "client": {
        "clientId": client.clientId, //this.infoClient["data"]["data"]["0"]["clientId"],
        "documentNumber": client.clientId?null:client.documentNumber,
        "documentTypeCode": client.clientId?null:client.documentType,
        "fullname": client.clientId?null:client.fullName
      },
      "commercialOffer": {
        "groupPlan": this.planComposition?.planCompositionCode,
        "productTypeCode": this.productTypeCode
      },
      "saleOrder": {
        "planCode": this.planComposition?.planCompositionCode,
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
    this.scoringValidationService.getValidationClientScoring(planService, this.autentication["data"]["token"]).subscribe(
      response => {
        this.scoringValid = response;
        this.webstoreservice.saveStatusScoring(this.scoringValid["data"]["flowType"]);
        this.router.navigate(['/oferta/orden-compra']);
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

  get name() {
    return this.validationForm.get('name');
  }

  get lastname() {
    return this.validationForm.get('lastname');
  }

  get captcha_status() {
    return this.validationForm.get('captcha_status');
  }

  createPerson(){
    const person = this.webstoreservice.getClientInformation();
    const param = {
      createPerson: person,
      createPersonAdditionalData: [
        {
          dataTypeCode: 'CONTACT_PHONE',
          status: 'A',
          valueData: this.validationForm.value.subscriberId
        }
      ],
      userId: this.autentication["data"]["userId"]
    }
    this.ordersService.createPerson(param, this.autentication["data"]["token"]).subscribe(
      response => {
        console.log(response);
        person.personId = response.data.data.personId;
        this.webstoreservice.saveClientInformation(person);
        this.router.navigate(['/oferta/orden-compra']);
      });
  }

}
