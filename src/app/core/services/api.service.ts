/* eslint-disable max-lines-per-function */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  post(path: string,
    data: any,
    accessToken?: { token: string }): Observable<any> {
    return this.http.post(
      this.getURL(path),
      data,
      this.getOptions(path, true, null, accessToken)).pipe(
        catchError(err => this.handleErrorConnection(err))
      );
  }

  handleErrorConnection(err: any): any {
    console.log(err.error.message);
    throw new Error(err && err.error ? err.error.message : 'Method not implemented.');
  }

  private getOptions(
    paramsObject?: any,
    sendGetParams?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text' | null,
    accessToken?: { token: string }): any {
    let httpOptions: {
      headers: HttpHeaders;
      params?: HttpParams;
      responseType?: string;
    };
    // eslint-disable-next-line prefer-const
    httpOptions = {
      headers: new HttpHeaders(),
    };
    httpOptions.headers = httpOptions.headers.append('Accept', 'application/json');
    if (accessToken) {
      httpOptions.headers = httpOptions.headers.append('Authorization', `Bearer ${accessToken.token}`);
      // recuperar por interceptor
      // como recupero el token y la informacion del usuario
    }
    if (paramsObject && sendGetParams) {
      const params = new HttpParams({ fromObject: paramsObject });
      httpOptions.params = params;
    }
    if (responseType) {
      httpOptions.responseType = responseType;
    }
    return httpOptions;
  }

  private getURL(path: string): string {
    let url = `${environment.endPoint}${path}`;
    console.log(url);
    return url;
  }
}
