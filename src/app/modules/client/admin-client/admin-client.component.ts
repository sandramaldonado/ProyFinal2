import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '@app/services/client.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { DocumentType } from '@models/DocumentType';

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.scss']
})
export class AdminClientComponent implements OnInit {
  subscriberId: any;
  key: any;
  title = "Tus datos de registro";
  message = "Llena o revisa los datos del siguiente formulario, cuando termines presiona en Continuar.";
  // definicion de tipos Dock
  tipoDoc: DocumentType[] = [{value: 'CI', description: 'CI'}, {value: 'NIT', description: 'NIT'}, {value: 'LIBRETA', description: 'LIB. MILITAR'}];
  expedido: DocumentType[] = [{value: 'CBEN', description: 'Beni'}, {value: 'CCBA', description: 'Cochabamba'}, {value: 'CLPZ', description: 'La Paz'}, {value: 'CORU', description: 'Oruro'}, {value: 'CPAN', description: 'Pando'}, {value: 'CPOT', description: 'Potosi'}, {value: 'CSCR', description: 'Sucre'}, {value: 'CSCZ', description: 'Santa Cruz'}, {value: 'CTRJ', description: 'Tarija'}];

  // definir valores de evaluacion numeros y alfa numericos
  dniClientPattern = /^[A-Za-z0-9]+$/;
  nameClient = /^[A-Za-z]+$/;
  surNameClient = /^[A-Za-z\s]+$/;
  mobilNumPattern = /^[0-9]+$/;
  emailtext = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
  panelOpenState = false;
  submitted: boolean = false;
  clientInfo: any;
  keyClient: any;
  stateScorin: String;
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
    'razonS': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.surNameClient)]),
    'nit': new FormControl(null, [Validators.required, Validators.minLength(7), Validators.maxLength(15), Validators.pattern(this.mobilNumPattern)])
  });
  infoClient: any;

  @Output() nextAdminClientStep = new EventEmitter<any>();

  constructor(private router: Router,
            private activatedRoute: ActivatedRoute,
            private clientService: ClientService,
            private webstoreservice: WebstoreService) {
    this.key = sessionStorage.getItem("key");
    this.clientInfo = this.webstoreservice.getClientInformation();
    this.stateScorin = this.webstoreservice.getStatusScoring();

    //this.infoClientService.disparadorInfoClient.subscribe(data => {console.log(data); this.clientInfo.push(data);});
  }

  ngOnInit(): void {

    //this.activatedRoute.params.subscribe(params => {console.log(params); this.subscriberId = params["phone"];});
    //console.log(this.subscriberId);
    //this.loadcontents();
    //console.log(this.key);

    //this.clientInfo = this.webstoreservice.getClientInformation();
    //console.log(this.stateScorin);
    this.loadForm();
  }

  loadcontents() {
    this.clientService.getClientByMovil(this.subscriberId, this.key)
        .subscribe(
          response => {
            this.infoClient = response;
            this.loadForm();
          },
          error => {
            console.log(error);
          });
  }

  loadForm() {
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
        nit:  nroNit
      },
      {
        emitEvent: true,
        onlySelf: true
      }
    );



  }

  next (){
    this.nextAdminClientStep.emit(true);
  }

  onSubmit() {}
  /**
   firstName': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.nameClient)]),
    'secondName': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.nameClient)]),
    'sureName': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.surNameClient)]),
    'secondSurName': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.surNameClient)]),
    'tipo': new FormControl(null, [Validators.required]),
    'nroDoc': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(this.dniClientPattern)]),
    'expDoc': new FormControl(null, [Validators.required]),
    'nroRef': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.mobilNumPattern)]),
    'email': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.emailtext)])
   */

    get firstName() {
      return this.validationForm.get('firstName');
    }

    get sureName() {
      return this.validationForm.get('sureName');
    }

    get tipo() {
      return this.validationForm.get('tipo');
    }

    get nroDoc() {
      return this.validationForm.get('nroDoc');
    }

    get expDoc() {
      return this.validationForm.get('expDoc');
    }

    get nroRef() {
      return this.validationForm.get('nroRef');
    }

    get email() {
      return this.validationForm.get('email');
    }

    get razonS() {
      return this.validationForm.get('razonS');
    }

    get nit() {
      return this.validationForm.get('nit');
    }
}
