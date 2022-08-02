import { Component, OnInit } from '@angular/core';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlanComposition } from '@models/PlanComposition';

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
  tabs : any;
  orderTabs : string[]= [];
  coverageData : any;

  constructor(
    private webstoreservice : WebstoreService
  ) { 


    this.tabs = {
      checkCoverage: {
        active: false,
        visited: false
      },
      resultScoring: {
        active: true,
        visited: false
      },
      adminClient: {
        active: false,
        visited: false
      },
      checkEmail: {
        active: false,
        visited: false
      },
      documents: {
        active: false,
        visited: false
      }
    };
  }

  ngOnInit(): void {
    this.planCompositionCode=this.webstoreservice.getPlanCompositionCode();
    this.planComposition = this.webstoreservice.getPlanComposition();
    this.loadComponents();
  }

  loadComponents(){
    this.planList = this.planComposition?.planList;
    console.log(this.planList.length);
    if(this.planList.length==1){
      if(this.planList[0].consumptionEntityType === "MOVIL"){
        this.tabs.checkCoverage.active = false;
      }else{
        this.tabs.checkCoverage.active = true;
      }
    }else{
      this.tabs.checkCoverage.active = true;
    }

  }



  nextStep(data : any){
    console.log(data);

  }

}
