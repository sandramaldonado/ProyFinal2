/**
 *
 * Landing Master Sales: Order Component
 *
 * Nuevatel PCS de Bolivia S.A. (c) 2022
 *
 * El Contenido de este archivo esta clasificado como:
 *
 * INFORMACION DE CONFIDENCIALIDAD ALTA
 *
 * @author Nuevatel PCS
 *
 * @version 1.0.0 Date 01/08/2022
 *
 */
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
