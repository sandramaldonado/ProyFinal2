import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { WebstoreService } from '@services/webstore/webstore.service';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  constructor(
    private httpClient : HttpClient,
    private webstoreservice : WebstoreService
  ) { }

  checkGISCovarge(data:any): Observable<any> {
    var AVLKey = environment.AVLTokenKey;
    var AVLValue = environment.AVLTokenValue;

    var headers = {
      'Content-Type': 'application/json',
      'x-access-token': AVLValue
    };

    const httpOptions = {
      headers: headers
    };


    return this.httpClient.post<any>(`${environment.AVLApiUrl}`, JSON.stringify(data), httpOptions);

  }

  checkCoverage (data : any, token : string): Observable<any> {
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    };

    const httpOptions = {
      headers: headers
    };

    return this.httpClient.post<any>(`${environment.endPoint}/order/address/customerSite`, JSON.stringify(data), httpOptions);

  }

  saveCoverageData (data : any){
    this.webstoreservice.saveDataInSession("coverage", data)
  }
}
