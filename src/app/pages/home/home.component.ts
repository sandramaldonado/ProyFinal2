import { Component, OnInit } from '@angular/core';
import { SystemService } from "@services/system/system.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { SmsModalComponent } from '@app/modals/sms-modal/sms-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private systemservice : SystemService,
    private modalService: BsModalService,
    private modalRef: BsModalRef 
  ) { }

  ngOnInit(): void {
  }

  sendSMS(){
    const dataSms = {
      code: this.randomNumber(),
      phoneNumber: 79719242,
      token : ""
    };

    this.openSmsModal(dataSms)




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

  openSmsModal(data: any) {  
    const initialState  = {
      data : data
      
    }
    this.modalRef = this.modalService.show(SmsModalComponent, { initialState, class : "modal-viva" });
  }  

}


