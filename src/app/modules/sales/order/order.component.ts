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
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { BusinessrulesService } from '@app/services/businessrules/businessrules.service';
import { TokenService } from '@app/services/token.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlanComposition } from '@models/PlanComposition';
import { Observable, switchAll } from 'rxjs';
import { ViewportScroller } from "@angular/common";
import { OrdersService } from '@app/services/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  showCoverage : boolean = true;
  showScoring : boolean = true;
  planCompositionCode: any;
  planList: any;
  planComposition? : PlanComposition;
  modules : any;
  bre :any;
  orderTabs : string[]= [];
  coverageData: any;
  autentication: any
  scoringStatus: any;

  constructor(
    private webstoreservice : WebstoreService,
    private breservices : BusinessrulesService,
    private tokenService : TokenService,
    private scroller: ViewportScroller,
    private ordersService: OrdersService
  ) {

    this.modules = {
      checkCoverage: {
        visible :false,
        active: false,
        enabled : true,
        alias : 'checkcoverage'
      },
      scoring: {
        visible :false,
        active: false,
        enabled : true,
        alias : 'scoring'
      },
      adminClient: {
        visible :false,
        active: false,
        enabled : true,
        alias : 'adminclient'
      },
      checkEmail: {
        visible :false,
        active: false,
        enabled : true,
        alias : 'checkemail'
      },
      documents: {
        visible :false,
        active: false,
        enabled : true,
        alias : 'documents'
      },
      movilList: {
        visible :false,
        active: false,
        enabled : true,
        alias : 'movilList'
      },
      detailsale:{
        visible:false,
        active:false,
        enabled:true,
        alias: 'detailsale'
      },
      deliverymethod: {
        visible :false,
        active: false,
        enabled : true,
        alias : 'deliverymethod'
      },
      almostdone: {
        visible :false,
        active: false,
        enabled : true,
        alias : 'almostdone'

      }
 
    };
  }

  ngOnInit(): void {
    this.planCompositionCode=this.webstoreservice.getPlanCompositionCode();
    this.planComposition = this.webstoreservice.getPlanComposition();
    this.getToken();

  }


  loadBussinesRules(){
      /**BRE Goes Here */

     this.breservices.coverageEvaluation(this.autentication["data"]["token"])
      .subscribe(response =>{
      this.coverageData=response;
      this.scoringStatus = this.webstoreservice.getStatusScoring();
      this.initializeComponents();
    })


  }

  initializeComponents(){
    this.planList = this.planComposition?.planList;
    /***COBERTURA (es el primer modulo sera visible por defecto)*****/

    /***** habilitar cobertura Usando Business Rules***** */
    if(this.coverageData.data.requireCoverageVerification == "OK"){

      this.modules.checkCoverage.visible = true;
    }else{
      this.modules.checkCoverage.enabled = false;
    }


    /***SCORING (es el segundo modulo se debe evaluar si sera visible en base a la visibilidad de boertura) */

    this.modules.scoring.enabled =  (this.scoringStatus == "NORMAL");
    this.modules.scoring.visible = (this.modules.scoring.enabled &&  !this.modules.checkCoverage.visible )

    /**ADMIN CLIENT */
    this.modules.adminClient.visible = !this.modules.scoring.visible && !this.modules.checkCoverage.visible

  }


  getToken() {
    this.tokenService.gettoken()
      .subscribe(response =>{
        this.autentication = response;
        //this.loadBussinesRules();
        this.webstoreservice.saveDataInSession('userId', response.data?.userId);
        this.createOrder();
      });
  }


  changeModule(module :any){
  console.log(module)
  var me = this;

   switch (module) {
    case 'checkcoverage':
      if(this.modules.scoring.enabled){
        this.modules.scoring.visible=true;

        setTimeout(function(){
          me.scroller.scrollToAnchor("scoring");
        }, 1000);

      }else{
        this.changeModule("scoring");
      }

    break;
    case 'scoring':
      if(this.modules.adminClient.enabled){
        this.modules.adminClient.visible=true;

        setTimeout(function(){
          me.scroller.scrollToAnchor("adminclient");
        }, 1000);

      }else{
        this.changeModule("adminclient");
      }

    break;
    case 'adminclient':
      if(this.modules.checkEmail.enabled){
        this.modules.checkEmail.visible=true;

        setTimeout(function(){
          me.scroller.scrollToAnchor("checkemail");
        }, 1000);


      }else{
        this.changeModule("checkemail");
      }

    break;
    case 'checkemail':

      if(this.modules.documents.enabled){
        this.modules.documents.visible=true;

        setTimeout(function(){
          me.scroller.scrollToAnchor("documents");
        }, 1000);

      }else{
        this.changeModule("documents");
      }

    break;
    case 'documents':

      if(this.modules.movilList.enabled){
        this.modules.movilList.visible=true;

        setTimeout(function(){
          me.scroller.scrollToAnchor("movillist");
        }, 1000);

      }else{
        this.changeModule("movillist");
      }

    break;
    /*
    case 'movillist':
      if(this.modules.deliveryMethod.enabled){
        this.modules.deliveryMethod.visible=true;

        setTimeout(function(){
          me.scroller.scrollToAnchor("deliverymethod");
        }, 1000);

      }else{
        this.changeModule("deliverymethod");
      }
      break;*/
    case 'movilList':
      if(this.modules.payment.enabled){
        this.modules.payment.visible=true;

        setTimeout(function(){
          me.scroller.scrollToAnchor("payment");
        }, 1000);

      }else{
        this.changeModule("payment");
      }
      break;
     default:
      break;
   }


  }

  createOrder(){
    const client = this.webstoreservice.getClientInformation();
    const param = {
      "orderType": "PTFSALE",
      "orderTypeName": "VENTAS",
      "partyId": client.personId,
      "fullName": client.fullName,
      "customerId": client.clientId,
      "channelCode": "CAATCL",
      "channelName": "ATENCION AL CLIENTE",
      "workplaceCode": "TIEEDISSA",
      "workplaceName": "Tienda Edificio Issa",
      "cityCode": client.documentCity,
      "cityName": client.documentCityDesc,
      "userId": this.autentication["data"]["userId"],
      "userName": "landing",
      "userFullName": "landing",
      "userRoleCode": "ROL_ASESOR_3"
    }
    this.ordersService.createOrder(param, this.autentication["data"]["token"]).subscribe(
      response => {
        console.log(response);
        this.webstoreservice.saveDataInSession('orderMainId', response.data.data.orderMainId);
        this.registerCommercialOffer(response.data.data.orderMainId);
        this.loadBussinesRules();
      });
  }

  registerCommercialOffer(orderId: any){
    const plan = this.webstoreservice.getPlanComposition();
    const param = {
      "orderId": orderId,
      "sequence": 0,
      "userId": this.autentication["data"]["userId"],
      "microFrontendId": "commercial-offers-microfront-app",
      "microFrontendData": JSON.stringify(plan),
      "statusCode": "INI"
    }
    this.ordersService.registerOrderView(param, this.autentication["data"]["token"]).subscribe(
      response => {
        console.log(response);
        this.loadBussinesRules();
      });
  }

  submitOrder(){

  }

}
