import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '@app/services/client.service';
import { DocumentType } from '@models/DocumentType';

@Component({
  selector: 'app-admin-client',
  templateUrl: './admin-client.component.html',
  styleUrls: ['./admin-client.component.scss']
})
export class AdminClientComponent implements OnInit {
  subscriberId: any;
  key: any;
  title = "Hola, ¿Como estas?";
  messagge = "Porfavor Ingresa tus datos personales, estos datos nos servirán para brindarte un buen servicio.";
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
  clientInfo: any;
  validationForm = new FormGroup({
    'firstName': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.nameClient)]),
    'secondName': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.nameClient)]),
    'sureName': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.surNameClient)]),
    'secondSurName': new FormControl(null, [Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.surNameClient)]),
    'tipo': new FormControl(null, [Validators.required]),
    'nroDoc': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(this.dniClientPattern)]),
    'expDoc': new FormControl(null, [Validators.required]),
    'nroRef': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.mobilNumPattern)]),
    'email': new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern(this.emailtext)])
  });
  infoClient: any;

  constructor(private router: Router, 
            private activatedRoute: ActivatedRoute,
            private clientService: ClientService,) { 
    this.key = sessionStorage.getItem("key");
    //this.infoClientService.disparadorInfoClient.subscribe(data => {console.log(data); this.clientInfo.push(data);});
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {console.log(params); this.subscriberId = params["phone"];});
    //console.log(this.subscriberId);
    this.loadcontents();
    //console.log(this.key);
    
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
    const name1 = this.infoClient["data"]["data"]["0"]["name"];
    const name2 = this.infoClient["data"]["data"]["0"]["middleName"];
    const lastname1 = this.infoClient["data"]["data"]["0"]["lastName1"];
    const lastname2 = this.infoClient["data"]["data"]["0"]["lastName2"];
    const docType = this.infoClient["data"]["data"]["0"]["documentType"];
    const docNumber = this.infoClient["data"]["data"]["0"]["documentNumber"];
    const docCity = this.infoClient["data"]["data"]["0"]["documentCity"];
    const email = this.infoClient["data"]["data"]["0"]["email"];
    
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
        email: email
      },
      {
        emitEvent: true,
        onlySelf: true
      }
    );
    
    
    
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
}
