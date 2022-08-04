import { Injectable } from '@angular/core';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import * as cts from '@shared/utils/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessrulesService {
  apiUrl : string = "http://omega.10.45.57.104.sslip.io/rules";

  constructor(
    private webstoreservice : WebstoreService,
    private httpClient: HttpClient

  ) { }


  coverageEvaluation(token : string): Observable<any> {
    console.log(token);
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };

    const httpOptions = {
      headers: headers
    };

    var planComposition = this.webstoreservice.getPlanComposition();

    var data ={
      "productTypeCode" : [],
      "compositionPlanCode" : planComposition.planCompositionCode,
      "channelCode" : "landing"
  }
  let productTypeCode : any = [];

  for (let i = 0; i < planComposition.planList.length; i++) {
    const item = planComposition.planList[i];
    productTypeCode.push(item.consumptionEntityType)

  }
  data.productTypeCode =productTypeCode;

  return this.httpClient.post<any>(`${this.apiUrl}` + "/rules/productCatalog/coverageEvaluation",JSON.stringify(data), httpOptions);

  }

}
