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

  constructor(
    private webstoreservice : WebstoreService
  ) { }

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
        this.showCoverage = false;
      }
    }

  }

}
