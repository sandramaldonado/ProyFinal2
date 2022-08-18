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
import { forkJoin, Observable, switchAll } from 'rxjs';
import { ViewportScroller } from "@angular/common";
import { OrdersService } from '@app/services/orders.service';
import { NgxSpinnerService } from "ngx-spinner";
import { update } from 'lodash';

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
    private ordersService: OrdersService,
    private spinner: NgxSpinnerService
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
      movillist: {
        visible :false,
        active: false,
        enabled : true,
        alias : 'movillist'
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
    this.spinner.show();
    this.planCompositionCode=this.webstoreservice.getPlanCompositionCode();
    this.planComposition = this.webstoreservice.getPlanComposition();
    this.planList = this.planComposition?.planList;
    this.getToken();

  }


  loadBussinesRules(){
      /**BRE Goes Here */

     this.breservices.coverageEvaluation(this.autentication["data"]["token"])
      .subscribe({
        next: response =>{
                this.coverageData=response;
                this.scoringStatus = this.webstoreservice.getStatusScoring();
                this.initializeComponents();
                this.spinner.hide();
              },
        error : e =>{
          alert ("Ocurrion un error en los servicios de necesidad de evaluacion cobertura, Intenta nuevamente por favor");
          this.spinner.hide();
          console.log(e);
        }
      })


  }

  initializeComponents(){
   
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
      .subscribe({
        next:response =>{
              this.autentication = response;
              //this.loadBussinesRules();
              this.webstoreservice.saveDataInSession('userId', response.data?.userId);
              this.createOrder();
            },
        error : error =>{
          alert("Ocurrio un problema en los servicios de Autentificacion, Intente nuevamente por favor");
          this.spinner.hide();
          console.log(error);
        }
    });
  }


  changeModule(module :any){
  console.log(module);
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

      if(this.modules.movillist.enabled){
        this.modules.movillist.visible=true;

        setTimeout(function(){
          me.scroller.scrollToAnchor("movillist");
        }, 1000);

      }else{
        this.changeModule("movillist");
      }

    break;

    case 'movillist':
      if(this.modules.deliverymethod.enabled){
        this.modules.deliverymethod.visible=true;

        setTimeout(function(){
          me.scroller.scrollToAnchor("deliverymethod");
        }, 1000);

      }else{
        this.changeModule("deliverymethod");
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
    this.ordersService.createOrder(param, this.autentication["data"]["token"])
    .subscribe({
      next: response => {
        console.log(response);
        this.webstoreservice.saveDataInSession('orderMainId', response.data.data.orderMainId);
        this.registerCommercialOffer(response.data.data.orderMainId);
        this.loadBussinesRules();
      },
      error : e =>{
        alert("Ocurrion un error en los servicios de creacion de orden, Intenta nuevamente por favor");
        this.spinner.hide()
        console.log(e);
      }
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
    this.ordersService.registerOrderView(param, this.autentication["data"]["token"])
    .subscribe({
      next: response => {
        console.log(response);
        this.loadBussinesRules();
        this.loadItemsPlan();
      },
      error : e =>{
        alert("Ocurrio un error en los servicios de creacion de la Order View, intente nuevamente por favor");
        this.spinner.hide();
        console.log(e);
      }
    });
       
  }

  loadItemsPlan(){
    const param = {
      planCompositionCode: this.webstoreservice.getPlanCompositionCode(),
      userId: this.autentication["data"]["userId"]
    }
    this.ordersService.getItemsPlan(param, this.autentication["data"]["token"]).subscribe(
      response => {
        console.log(response);
        this.webstoreservice.saveDataInSession('itemsPlan', response.data.data);
        this.buildMandatoryItems(response.data.data);
      });
  }


  buildMandatoryItems(itemsData: any){
    let mandatoryItems = [];
    for (let i = 0; i < itemsData.planList.length; i++) {
      const plan = itemsData.planList[i];
      for (let j = 0; j < plan.itemTypeList.length; j++) {
        const itemType = plan.itemTypeList[j];
        if(itemType.isMandatory === '1'){
          const item = {
            componentCategoryId: plan.componentCategoryId,
            componentCode: plan.componentCode,
            itemCode: itemType.itemList[0].itemCode,
            itemDescription: itemType.itemList[0].itemDescription,
            quantity: itemType.quantity,
            itemType: itemType.itemType,
            planCode: plan.planCode,
            consumptionEntityType: plan.consumptionEntityType,
            planCompositionCode: this.webstoreservice.getPlanCompositionCode(),
            userId: this.autentication["data"]["userId"]
          }
          mandatoryItems.push(item);
        }
      }
    }
    console.log('mandatoryItemsPlan', mandatoryItems);
    this.webstoreservice.saveDataInSession('mandatoryItemsPlan', mandatoryItems);
    this.getValuesItems(mandatoryItems);
  }

  getDataItem(item: any): Promise<any>{
    return new Promise((resolve) => {
        this.ordersService.getItemDetail(item, this.autentication["data"]["token"]).subscribe(
          response => {
            console.log('getItemDetail', response);
            let itemData = response.data.data;
            itemData.consumptionEntityType = item.consumptionEntityType;
            itemData.componentTradeName = item.consumptionEntityType;
            itemData.componentCategoryId = item.componentCategoryId;
            itemData.planCode = item.planCode;
            itemData.componentCode = item.componentCode;
            itemData.itemTypeCode = item.itemType;
            itemData.quantity = item.quantity;
            itemData.quantityItem = item.quantity;
            itemData.isMandatory = '1';
            itemData.isVisible = 1;
            resolve(itemData);
        });
    });
  }

  getValuesItems(mandatoryItems: any[]){
    let proms = [];
    for (let i = 0; i < mandatoryItems.length; i++) {
      const element = mandatoryItems[i];
      let p = this.getDataItem(element);
      proms.push(p);
    }
    forkJoin(proms).subscribe(responses => {
       console.log('responses', responses);
       this.registerOrderViewItems(responses, false);
       this.webstoreservice.saveDataInSession('mandatoryItemsPlan', responses);
    });
  }

  registerOrderViewItems(data: any, update: boolean){
    const param = {
      "orderId": this.webstoreservice.getDataInSession('orderMainId'),
      "sequence": 0,
      "userId": this.autentication["data"]["userId"],
      "microFrontendId": "additional-items-setup-microfront-app",
      "microFrontendData": JSON.stringify(data),
      "statusCode": "INI"
    }
    this.ordersService.registerOrderView(param, this.autentication["data"]["token"]).subscribe(
      response => {
        console.log('registerOrderView', response);
        if(!update){
          this.registerItemsSale();
        }
      });
  }

  registerItemsSale(){
    const param = {
      orderId: this.webstoreservice.getDataInSession('orderMainId')
    }
    this.ordersService.registerItemsSale(param, this.autentication["data"]["token"]).subscribe(
      response => {
        console.log('registerItemsSale', response);
        this.registerOrderViewItems(response.data.data.itemsOrderList, true);
        this.webstoreservice.saveDataInSession('mandatoryItemsPlan', response.data.data.itemsOrderList);
      });
  }


  submitOrder(){

  }

}
