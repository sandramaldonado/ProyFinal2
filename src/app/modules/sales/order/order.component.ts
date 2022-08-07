import { Component, OnInit } from '@angular/core';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { BusinessrulesService } from '@app/services/businessrules/businessrules.service';
import { TokenService } from '@app/services/token.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PlanComposition } from '@models/PlanComposition';
import { Observable, switchAll } from 'rxjs';

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
    private tokenService : TokenService
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
        this.loadBussinesRules();

      });
  }


  changeModule(module :any){
  console.log(module)

   switch (module) {
    case 'checkcoverage':
      if(this.modules.scoring.enabled){
        this.modules.scoring.visible=true;
      }else{
        this.changeModule("scoring");
      }

    break;
    case 'scoring':
      if(this.modules.adminClient.enabled){
        this.modules.adminClient.visible=true;
      }else{
        this.changeModule("adminclient");
      }

    break;
    case 'adminclient':
      if(this.modules.checkEmail.enabled){
        this.modules.checkEmail.visible=true;
      }else{
        this.changeModule("checkemail");
      }

    break;
    case 'checkemail':

      if(this.modules.documents.enabled){
        this.modules.documents.visible=true;
      }else{
        this.changeModule("documents");
      }

    break;
    case 'documents':

    break;

     default:
      break;
   }


  }

}
