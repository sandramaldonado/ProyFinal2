/**
 * Componente administración de información de Cliente
 * NuevaTel PCS de Bolivia S.A. (c) 2022
 * El contenido de este archivo esta clasificado como:
 * INFORMACION DE CONFIDENCIALIDAD ALTA
 * @author Victor Antonio Zurita Borja
 * @version 1.0.0
 * @date 2022-08-01
 * @since 1.8.0_232 
*/
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '@app/services/client.service';
import { OrdersService } from '@app/services/orders.service';
import { TokenService } from '@app/services/token.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { DocumentType } from '@models/DocumentType';
import { LocalStorage, SessionStorage } from 'ngx-webstorage';

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.scss']
})
export class AdminClientComponent implements OnInit {
  key: any;
  title = "Tus datos de registro";
  message = "Llena o revisa los datos del siguiente formulario, cuando termines presiona en Continuar.";
  // definicion de tipos Documentos y ciudad
  tipoDoc: DocumentType[] = [{ value: 'CI', description: 'CI' }, { value: 'NIT', description: 'NIT' }, { value: 'LIBRETA', description: 'LIB. MILITAR' }];
  expedido: DocumentType[] = [{ value: 'CBEN', description: 'Beni' }, { value: 'CCBA', description: 'Cochabamba' }, { value: 'CLPZ', description: 'La Paz' }, { value: 'CORU', description: 'Oruro' }, { value: 'CPAN', description: 'Pando' }, { value: 'CPOT', description: 'Potosi' }, { value: 'CSCR', description: 'Sucre' }, { value: 'CSCZ', description: 'Santa Cruz' }, { value: 'CTRJ', description: 'Tarija' }];
  // definir valores de evaluacion numeros y alfa numericos
  dniClientPattern = /^[A-Za-z0-9]+$/;
  nameClient = /^[A-Za-z]+$/;
  surNameClient = /^[A-Za-z\s]+$/;
  mobilNumPattern = /^[0-9]+$/;
  emailtext = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  // declaracion de variables
  subscriberId: any;
  panelOpenState = false;
  submitted: boolean = false;
  clientInfo: any;
  keyClient: any;
  stateScorin: String = "";
  stateClient: Boolean = false;
  stateSelect: Boolean = false;
  // Formulario definido para validación
  validationForm = new FormGroup({
    'firstName': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.nameClient)]),
    'secondName': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.nameClient)]),
    'sureName': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.surNameClient)]),
    'secondSurName': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.surNameClient)]),
    'tipo': new FormControl(null, [Validators.required]),
    'nroDoc': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(this.dniClientPattern)]),
    'expDoc': new FormControl(null, [Validators.required]),
    'nroRef': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.mobilNumPattern)]),
    'email': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.emailtext)]),
    'razonS': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.surNameClient)]),
    'nit': new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern(this.mobilNumPattern)])
  });
  infoClient: any;
  visited: boolean = false;

  @Output() nextAdminClientStep = new EventEmitter<any>();
  @LocalStorage()
  public boundAttribute: any = "Texto Inicial";

  @LocalStorage()
  public boundLastName: any;
  /**
   * Metodo constructor de clase
   * Instancia Clases de enrutado, servicios storage, servicios de registro y otros
  */
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private ordersService: OrdersService,
    private tokenService: TokenService,
    private webstoreservice: WebstoreService) {
    this.key = sessionStorage.getItem("key");
    this.clientInfo = this.webstoreservice.getClientInformation();
    this.stateScorin = this.webstoreservice.getStatusScoring();

    //this.infoClientService.disparadorInfoClient.subscribe(data => {console.log(data); this.clientInfo.push(data);});
  }

  /**
   * Metodo de inicio de modelo, obtiene tokenizacion y cargado de formulario en pantalla
  */
  ngOnInit(): void {
    this.getToken();
    this.loadForm();
  }

  /**
   * Obtencion de token por medio de consulta a Servicios externos
  */
  getToken() {
    this.tokenService.gettoken()
      .subscribe(
        response => {
          this.webstoreservice.saveDataInSession('token', response.data?.token);
          this.webstoreservice.saveDataInSession('userId', response.data?.userId);
        },
        error => {
          console.log(error);
        });
  }

  /**
   * Se gestiona el cargado de datos instanciados de sesion lpara cliente localizado en plataforma 02 y/o O3
  */
  loadForm() {
    console.log(this.clientInfo["clientId"]);
    if (this.clientInfo["clientId"] > 0) {
      console.log("Existe");
      this.stateClient = true;
      this.stateSelect = true;
    } else {
      console.log("No Existe");
      this.stateSelect = true;
      this.stateClient = false;
    }
    const name1 = this.clientInfo["name"];
    const name2 = this.clientInfo["middleName"];
    const lastname1 = this.clientInfo["lastName1"];
    const lastname2 = this.clientInfo["lastName2"];
    const docType = this.clientInfo["documentType"];
    const docNumber = this.clientInfo["documentNumber"];
    const docCity = this.clientInfo["documentCity"];
    const email = this.clientInfo["email"];
    const rSocial = this.clientInfo["fullName"];
    const nroNit = this.clientInfo["nit"];
    this.validationForm.setValue(
      {
        firstName: name1,
        secondName: name2,
        sureName: lastname1,
        secondSurName: lastname2,
        tipo: docType,
        nroDoc: docNumber,
        expDoc: docCity,
        nroRef: null,
        email: email,
        razonS: rSocial,
        nit: nroNit
      },
      {
        emitEvent: true,
        onlySelf: true
      }
    );
  }

  /**
   * Ejecucion de rescate de informacion cliente.
   * Ademas de consolidar y pasar a siguiente etapa de venta
  */
  next() {
    let name1 = this.validationForm.value.firstName!;
    let name2 = this.validationForm.value.secondName!;
    let lastname1 = this.validationForm.value.sureName!;
    let lastname2 = this.validationForm.value.secondSurName!;
    let tipo = this.validationForm.value.tipo!;
    let ci = this.validationForm.value.nroDoc!;
    let exp = this.validationForm.value.expDoc!;
    let ref = this.validationForm.value.nroRef!;
    let correo = this.validationForm.value.email!;
    let rSocial = this.validationForm.value.razonS!;
    let nit = this.validationForm.value.nit!;

    let fullname = "";
    fullname = name1;
    if (name2 != "" || name2 != null) {
      fullname += " " + name2;
    }
    if (lastname1 != "" || lastname1 != null) {
      fullname += " " + lastname1;
    }

    if (lastname2 != "" || lastname2 != null) {
      fullname += " " + lastname2;
    }
    const datosClient = {
      "birthday": this.clientInfo["birthday"],
      "clientId": this.clientInfo["clientId"],
      "documentCity": exp,
      "documentCityDesc": this.clientInfo["documentCityDesc"],
      "documentNumber": ci,
      "documentType": tipo,
      "documentTypeDesc": this.clientInfo["documentTypeDesc"],
      "email": correo,
      "fullName": fullname,
      "gender": null,
      "lastName1": lastname1,
      "lastName2": lastname2,
      "middleName": name2,
      "name": name1,
      "rSocial": rSocial,
      "nroRef": ref,
      "nit": nit,
      "personId": this.clientInfo["personId"],
      "personTypeCode": this.clientInfo["personTypeCode"]
    };

    this.loadInfoClien(datosClient);
    console.log("inica");
    console.log(datosClient);
    console.log("finaliza");

    this.visited = true;

    this.registerClient();
    this.registerBillingInfo();

    this.nextAdminClientStep.emit(true);
  }

  /**
   * Instanciar datos validados en formulario y trasmisiona session Storage
  */  
  loadInfoClien(datosClient: any) {
    this.webstoreservice.saveClientInformation(datosClient);
  }

  /**
   * Obtencion de datos primer Nombre
  */
  get firstName() {
    return this.validationForm.get('firstName');
  }

  /**
   * Obtencion de datos Primer Apellido
  */
  get sureName() {
    return this.validationForm.get('sureName');
  }

  /**
   * Obtencion de datos Tipo de documento
  */
  get tipo() {
    return this.validationForm.get('tipo');
  }

  /**
   * Obtencion de datos Número de documento
  */
  get nroDoc() {
    return this.validationForm.get('nroDoc');
  }

  /**
   * Obtencion de datos Expedido de documento
  */
  get expDoc() {
    return this.validationForm.get('expDoc');
  }

  /**
   * Obtencion de datos Número de referencia
  */
  get nroRef() {
    return this.validationForm.get('nroRef');
  }

  /**
   * Obtencion de datos correo eletrónico
  */
  get email() {
    return this.validationForm.get('email');
  }

  /**
   * Obtencion de datos Razon social (Facturacion)
  */
  get razonS() {
    return this.validationForm.get('razonS');
  }

  /**
   * Obtencion de datos NIT (Facturacion)
  */
  get nit() {
    return this.validationForm.get('nit');
  }

  
  registerClient() {
    const client = this.webstoreservice.getClientInformation();
    const param = {
      "orderId": this.webstoreservice.getDataInSession('orderMainId'),
      "sequence": 2,
      "userId": this.webstoreservice.getDataInSession('userId'),
      "microFrontendId": "person-microfront-app",
      "microFrontendData": JSON.stringify(client),
      "statusCode": "INI"
    }
    this.ordersService.registerOrderView(param, this.webstoreservice.getDataInSession('token')).subscribe(
      response => {
        console.log(response);
      });
  }

  registerBillingInfo() {
    const client = this.webstoreservice.getClientInformation();
    const addressData = this.webstoreservice.getDataInSession('addressData');
    let billAddress: any;
    let billAddressId = 0;
    if (addressData) {
      addressData.forEach((element: any) => {
        if (element.selected) {
          billAddress = element;
        }
      });
      billAddressId = billAddress.addressId;
    }

    let billing = {
      "observations": "",
      "invoiceLabel": client.rSocial,
      "nit": client.nit,
      "email": client.email,
      "referencePhone": client.nroRef,
      "payment": {
        "paymentTypeCode": "TFPEFE"
      },
      "address": {}
    }
    if (billAddressId !== 0) {
      billing.address = {
        "addressId": billAddressId,
        "addressTypeCode": "BILL_ADDR"
      };
    }
    const param = {
      "orderId": this.webstoreservice.getDataInSession('orderMainId'),
      "sequence": 3,
      "userId": this.webstoreservice.getDataInSession('userId'),
      "microFrontendId": "billing-info-microfront-app",
      "microFrontendData": JSON.stringify(billing),
      "statusCode": "INI"
    }
    this.ordersService.registerOrderView(param, this.webstoreservice.getDataInSession('token')).subscribe(
      response => {
        console.log(response);
      });
  }
}
