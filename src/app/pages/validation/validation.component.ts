import { Component, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../shared/services/validation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit, OnChanges {
  clientDni: any;
  resultDni: Boolean;
  
  clientPhone: any;
  resultPhone: Boolean;
  hasError = true;
  validations: any;
  jsonObjectList: any;
  number:any;

  public gropuForm = new FormGroup({
    dniNumber: new FormControl(''),
    phoneNumber: new FormControl(''),
  });
  
  constructor( private dialog: MatDialog, 
              private validationService: ValidationService, 
              private rutaActiva: ActivatedRoute,
              private router: Router,
              private route: ActivatedRoute) {
    this.resultDni = false;
    this.resultPhone = false;
  }

  ngOnInit(): void {
    this.setupValidations();
    this.setupForm();
    this.loadForm();
  }

  loadForm() {
    let dniNumber = "";
    let phoneNumber = "";
    this.gropuForm.setValue({
      dniNumber,
      phoneNumber
    });
  }
  
  setupForm() {
    this.gropuForm = new FormGroup({
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(this.validations.phoneNumber.minLength),
        Validators.maxLength(this.validations.phoneNumber.maxLength)
      ]),
      dniNumber: new FormControl('', [
        Validators.required,
        Validators.minLength(this.validations.dniNumber.minLength),
        Validators.maxLength(this.validations.dniNumber.maxLength)
      ])
    });
  }
  setupValidations() {
    this.validations = {
      phoneNumber: {
        minLength: 0,
        maxLength: 8
      },
      dniNumber: {
        minLength: 0,
        maxLength: 19
      }
    };
  }
  
  ngOnChanges () {
    
  }

  saveForm(): void {
    let dni:string = this.gropuForm.controls.dniNumber.value!;
    let phone:string = this.gropuForm.controls.phoneNumber.value!;
/*
this.resultDni = this.validationDni(dni);
    this.resultPhone = this.validationPhone(phone);
    console.log(this.resultDni);
    console.log(this.resultPhone);
    if (this.resultDni || this.resultPhone) {
      this.router.navigate([`/oferta`]);
    } else {
      if (confirm("¿Desea efectuar el registro de un usuario en el portal?")) {
        this.router.navigate([`/registro`]);
      } else {
        this.router.navigate([`/home`]);
      }
    }
    console.log(this.resultDni);
    
*/
    if(this.validationNumbers(phone) && dni.length > 3) {
      this.validationService.getClient(dni, phone)
      .subscribe(
        response => {
          this.clientPhone = response;
          console.log(this.clientPhone);
          if (response.length > 0) {
            this.router.navigate([`/oferta`]);
          } else {
            if (!confirm("Los datos ingresados son incorrectos!!! \n"+
                  "¿Desea realizar nuevamente el intento de validación?")) {
              this.router.navigate([`/home`]);
            }  
          }
        },
        error => {
          console.log(error);
        });
    } else {
      console.log('La variable no es entera');
    }
  }
/**
 * 
 
  validationDni(dni: String): any {
    var stateDni = 0;
    this.validationService.getClientDni(dni)
    .subscribe(
      response => {
        this.clientDni = response;
        console.log(this.clientDni);
        if (response.length > 0) {
          stateDni = 1;
        } else {
          stateDni = 0;
        }
      },
      error => {
        console.log(error);
      });
      console.log(stateDni);
     return stateDni;
  }

  validationPhone(phone: String): any {
    var statePhone = 0;
    this.validationService.getClientPhone(phone)
    .subscribe(
      response => {
        this.clientPhone = response;
        console.log(this.clientPhone);
        if (response.length > 0) {
          statePhone = 1;
        } else {
          statePhone = 0;
        }
      },
      error => {
        console.log(error);
      });
      console.log(statePhone);
     return statePhone;
  }
 */

  validationNumbers(number: string) {
    var valoresAceptados = /^[0-9]+$/; 
    var state = false;
    if (number.match(valoresAceptados) && number.length == 8) {
      state = true;
    }
    return state;
  }
/*
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CourseDialogComponent, dialogConfig);
  }*/


}


/*
@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'validation-dialog.html',
})
export class DialogAnimationsExampleDialog {
  constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) {}
}
*/
