/**
 *
 * Landing Master Sales: Detail Component
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
 import { WebstoreService } from '@app/services/webstore/webstore.service';
 import { BusinessrulesService } from '@app/services/businessrules/businessrules.service';
 import { Router, ActivatedRoute, ParamMap } from '@angular/router';
 import { PlanComposition } from '@models/PlanComposition';
 import { Observable, switchAll } from 'rxjs';
 import { ViewportScroller } from "@angular/common";
 import { OrdersService } from '@app/services/orders.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  planCompositionCode: any;
  planList: any;
  planComposition? : PlanComposition;
  scoringStatus: any;
  modules: any;
  constructor(
    private webstoreservice : WebstoreService,
    private breservices : BusinessrulesService,
    private scroller: ViewportScroller,
    private ordersService: OrdersService
  ) {

    this.modules = {
      detailSale: {
        visible :true,
        active: false,
        enabled : true,
        alias : 'detailsale'
      },
      paymentMethod: {
        visible :true,
        active: false,
        enabled : true,
        alias : 'paymentMethod'
      },
      payment: {
        visible :true,
        active: false,
        enabled : true,
        alias : 'payment'
      }


    };
   }

  ngOnInit(): void {
    this.planCompositionCode=this.webstoreservice.getPlanCompositionCode();
    this.planComposition = this.webstoreservice.getPlanComposition();
    this.planList = this.planComposition?.planList;
  }

}
