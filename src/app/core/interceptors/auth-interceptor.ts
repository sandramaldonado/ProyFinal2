import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
    console.log("AuthInterceptor Nuevatel")
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request)
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhdGNwcnUxIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xfQVNFU09SXzMifV0sInVzZXJJZCI6MjEsImlzcyI6Imh0dHA6Ly9zYWxhbWFuY2Fzb2x1dGlvbnMuY29tIiwiaWF0IjoxNjU4NzcyNjM5LCJleHAiOjE2NTg3Nzk4Mzl9.iz2S5Wjqk4Y3DpjwDFyeLBF_z_SLP-2U-guV0OOdwz8';
    
    return next.handle(request.clone({ setHeaders: {  Authorization: `Bearer ${token}` } }));
  }
}
