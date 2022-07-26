import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from "@services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  private tokenAuth : any;
  constructor(private tokenService : TokenService) {
    console.log("AuthInterceptor Nuevatel")
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercept request: ", request);
    const token  = this.tokenService.gettoken();
    token.subscribe( t =>{
      console.log(t);
      this.tokenAuth = t;
    })

    
    //return next.handle(request.clone({ setHeaders: {  Authorization: `Bearer ${this.tokenAuth}` } }));
    return next.handle(request);
  }
}
