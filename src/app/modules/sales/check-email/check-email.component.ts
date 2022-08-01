import { Component, OnInit } from '@angular/core';
import { EmailService } from '@app/services/email.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  get emailCode() {
    return this.emailValidationForm.get('codeValidationEmail');
  }

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
  }

  validateEmail(){

    //const txtCodeEmail = (((document.getElementById('codeValidationEmail') as HTMLInputElement).value).split(' ').join('')).toUpperCase();
    console.log("emailcode input",this.emailCode?.value)
    console.log("randomemailcode",this.randomEmailCode)
    this.randomEmailCode
    if(this.emailCode?.value == this.randomEmailCode){
      this.disabled = false;
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

}
