import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sms-modal',
  templateUrl: './sms-modal.component.html',
  styleUrls: ['./sms-modal.component.scss']
})
export class SmsModalComponent implements OnInit {

  data : any;
  smscode: string = '';
  formSms = new FormGroup ({
   
    code: new FormControl ('', 
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(8),
        Validators.pattern(new RegExp('^([0-9]){1,8}$'))
      ])
  });
  errMessage: string = "";

  get code() { return this.formSms.get('code') };

  constructor(
    public bsModalRef: BsModalRef,
    private modalService: BsModalService, 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.smscode= this.data.code;
    console.log("SMS data: ", this.data);
    
  }

  onSubmit () : void{
    /*
    this.errMessage= "";
    //console.log("this.code",this.code);
    if(this.formSms.valid){
           
      //console.log(this.code.value,this.data.code);
      var smsFormCode = Number.parseInt(this.data.code);
      if(this.code.value == smsFormCode){
        this.bsModalRef.hide();
            
      }else{
        this.errMessage= "Código incorrecto. Verifique e intente nuevamente";

      }
    }else{
      return;
    }
    */

  }

}
