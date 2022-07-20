import { Component, OnInit, Inject } from '@angular/core';
import { Client } from '@models/Client';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslogSmsService } from '../../../shared/services/translog-sms.service'; 
import { TranslogSMS } from '../../../shared/models/translogSMS';

@Component({
  selector: 'app-validation-sms',
  templateUrl: './validation-sms.component.html',
  styleUrls: ['./validation-sms.component.scss']
})
export class ValidationSmsComponent implements OnInit {
  linea: any;
  mobilNumPattern = /^[0-9]+$/;
  translogSMS: any;
  clientPhone: string = "";
  /*
  validationCode = new FormGroup({
    'codigo': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(this.mobilNumPattern)])
  });
*/
  validationCode = new FormGroup({
    'codigo': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern(this.mobilNumPattern)])
  });

  constructor(private  translogSmsService: TranslogSmsService,  
    public dialogRef: MatDialogRef<ValidationSmsComponent>,
            @ Inject(MAT_DIALOG_DATA) public data: any ) {
    this.linea = data;
    //console.log(data);
  }

  ngOnInit(): void {
    this.dialogRef.disableClose = true;
  }

  onSubmit(){
    let codigo:string= "";
    console.log("Ingresa");
    /**
     if (this.validationForm.valid) {
      codigo = this.validationForm.value.codigo!;
      console.log(codigo);
      console.log(this.data);
      this.translogSmsService.validationAccesCode(this.data, codigo)
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

  }

  cancelar() {
    this.dialogRef.close();
  }

  save() {
    const codigo = this.validationCode.value.codigo!;
    console.log("Ingresa");
    console.log(this.validationCode.value);
    const {value, valid} = this.validationCode;
    if(valid){
      console.log(this.validationCode.value.codigo);
      console.log(codigo);
      console.log(this.data.data);
      console.log(this.linea.value);
      this.translogSmsService.validationAccesCode(this.linea, codigo)
      .subscribe(
        response => {
          this.translogSMS = response;
          console.log(this.translogSMS);
        },
        error => {
          console.log(error);
        });
    }      
  }

  close() {
    this.dialogRef.close();
  }

  get codigo() {
    return this.validationCode.get('codigo');
  }

  get status() {
    return this.validationCode.get('status');
  }

}
