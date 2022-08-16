/**
 *
 * Landing Master Sales: Offer Component
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
import { ClientService } from '@app/services/client.service';
import { TokenService } from '@app/services/token.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlanListService } from '@app/services/plan-list.service';
import { PlanComposition } from '@models/PlanComposition';
import { OrdersService } from '@app/services/orders.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  autentication: any;
  planCompositionCode: any;
  planesList: any;
  planComposition? : PlanComposition;
  totalOfferTariff : number = 0;
  public showButton : boolean = false;
  planListServices: any[] | undefined;
  consumptionFormCode: string | undefined;
  offerTariff: number | undefined;
  constructor(
    private clientService: ClientService,
    private  tokenService: TokenService,
    private route: ActivatedRoute,
    private router: Router,
    private planListService : PlanListService,
    private webstoreService : WebstoreService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this.webstoreService.clearWebStorePlanComposition();
    this.route.queryParams.subscribe(params => {
      this.planCompositionCode = params['code'];

    });
    this.getToken();
  }

  getToken() {
    this.tokenService.gettoken()
      .subscribe(response =>{
        this.autentication = response;
        this.getPlansList();
      });


  }

  getPlansList() {
    var me = this;
    this.planListService.getPlanList(this.autentication["data"]["token"])
    .subscribe(
      response => {
        this.planesList = response;
        //console.log(this.planesList);
        const planDataList = this.planesList["data"]["data"];

        var plan = planDataList.filter(function(v:any){
          return v.planCompositionCode=== me.planCompositionCode;
        });
        this.planComposition = plan[0];
        this.consumptionFormCode = this.planComposition?.consumptionFormCode;
        this.offerTariff = this.planComposition?.tariff;
        this.showButton = true;

      });

  }

  calculateTotalOfferTariff(){
    
    let total = 0;
    if(this.consumptionFormCode =="CCOPOS"){
    
      total = (this.offerTariff ? this.offerTariff : 0);
      this.planListServices = this.planComposition?.planList;

      if(this.planListServices){
        for (let index = 0; index < this.planListServices.length; index++) {
          //console.log(this.planListServices[index]["categoryData"].tariff);
          total += this.planListServices[index]["categoryData"].tariff? this.planListServices[index]["categoryData"].tariff : 0;
        }
      }
    }
    console.log("calculate offerTotalTariff",total)
    this.webstoreService.saveDataInSession("offerTotalTariff",total);

  }
  onClick(){
    this.webstoreService.savePlanCompositionCode(this.planCompositionCode);
    this.webstoreService.savePlanComposition(this.planComposition);
    this.webstoreService.saveDataInSession("offerConsumptionFormCode",this.consumptionFormCode);
    this.calculateTotalOfferTariff()
    this.router.navigate(['/client/validationClient']);

  }



}
