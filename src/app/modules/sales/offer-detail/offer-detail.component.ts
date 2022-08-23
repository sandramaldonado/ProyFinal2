import { Component, OnInit } from '@angular/core';
import { PlanComposition } from '@models/PlanComposition';
import { WebstoreService } from "@services/webstore/webstore.service";

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.scss']
})
export class OfferDetailComponent implements OnInit {
  planComposition? : PlanComposition;
  planCompositionCode: any;
  planList: any[] | undefined;

  constructor(
    private webstoreservice : WebstoreService
  ) { }

  ngOnInit(): void {
    this.planCompositionCode=this.webstoreservice.getPlanCompositionCode();
    this.planComposition = this.webstoreservice.getPlanComposition();
    this.planList = this.planComposition?.planList;
  }

}

