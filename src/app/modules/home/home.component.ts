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

  constructor() { }

  ngOnInit(): void {
  }

}
