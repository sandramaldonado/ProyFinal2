import { Component, OnInit } from '@angular/core';
import { ClientService } from '@app/services/client.service';
import { TokenService } from '@app/services/token.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlanListService } from '@app/services/plan-list.service';
import { PlanComposition } from '@models/PlanComposition';

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
  public showButton : boolean = false;
  constructor(
    private clientService: ClientService,
    private  tokenService: TokenService,
    private route: ActivatedRoute,
    private router: Router,
    private planListService : PlanListService,
    private webstoreService : WebstoreService
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
        console.log(this.planesList);
        const planDataList = this.planesList["data"]["data"];

        var plan = planDataList.filter(function(v:any){
          return v.planCompositionCode=== me.planCompositionCode;
        });
        this.planComposition = plan[0];
        console.log(this.planComposition);
        this.showButton = true;

      });

  }
  onClick(){
    this.webstoreService.savePlanCompositionCode(this.planCompositionCode);
    this.webstoreService.savePlanComposition(this.planComposition);
    this.router.navigate(['/client/validationClient']);

  }



}
