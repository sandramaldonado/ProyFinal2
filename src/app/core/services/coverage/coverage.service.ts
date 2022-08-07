import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoverageService {

  constructor(
    private httpClient : HttpClient
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
}
