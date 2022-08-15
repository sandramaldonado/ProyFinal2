import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EmailService } from '@app/services/email/email.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebstoreService } from "@services/webstore/webstore.service";

@Component({
  selector: 'app-check-email',
  templateUrl: './check-email.component.html',
  styleUrls: ['./check-email.component.scss']
})
export class CheckEmailComponent implements OnInit {
  randomEmailCode?: string;
  validCode : boolean = false;
  disabled : boolean = true;
  emailValidationForm = new FormGroup({
    'codeValidationEmail': new FormControl('', [Validators.required]),
  });

  emailData :any;

  get emailCode() {
    return this.emailValidationForm.get('codeValidationEmail');
  }

  @Output() nextCheckEmailStep = new EventEmitter<any>();
  constructor(
    private emailService: EmailService,
    private webstoreservice : WebstoreService
  ) { }

  ngOnInit(): void {
    console.log("check email");
    this.sendValidationCode();
  }

  validateEmail(){

    //const txtCodeEmail = (((document.getElementById('codeValidationEmail') as HTMLInputElement).value).split(' ').join('')).toUpperCase();
    console.log("emailcode input",this.emailCode?.value)
    console.log("randomemailcode",this.randomEmailCode)
    this.randomEmailCode
    if(this.emailCode?.value == this.randomEmailCode){
      this.disabled = false;
      this.validCode = true;
      this.next();
    }


  }

  sendValidationCode(){
    this.randomEmailCode = this.randomNumber();
    var validation = this.emailService.sendValidationEmail(this.randomEmailCode)
    .subscribe(response=>{
      console.log(response);
    });

  }

  randomNumber() {
    const charsArray = "0123456789";
    const lengthOtp = 4;
    const ranNum = [];
    for (let i = 0; i < lengthOtp; i++) {
      let index = Math.floor(Math.random() * charsArray.length + 1);
      if (ranNum.indexOf(charsArray[index]) === -1) {
        ranNum.push(charsArray[index]);
      } else {
        i--;
      }
    }
    return ranNum.join('');
  }

  next(){
    this.webstoreservice.saveDataInSession("checkemail",{validationCode: this.randomEmailCode})
    this.nextCheckEmailStep.emit(true);
  }


}
