import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { Photo } from '@models/Photo';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Autenticar } from '@models/Autenticar';
import * as cts  from "@shared/utils/constants";


@Injectable({
  providedIn: 'root'
})
export class WebstoreService {
  httpPostOptions = cts.httpPostOptions;
  httpGetOptions = cts.httpGetOptions;
  token : any;
  urToken = "http://omega.10.45.57.104.sslip.io/auth/login";

  constructor(
    private sessionStorageService : SessionStorageService,
    private localStorageService : LocalStorageService,
    private httpClient : HttpClient
  ) { }


 saveToken() : void{
  const token = this.httpClient.post<Autenticar>(`${this.urToken}`,
  JSON.stringify({"username":"atcpru1","password":"V1tZKv0LyinCFc3QPaH7Iw=="}),  this.httpPostOptions)

  .subscribe(
    response =>{
      if(response.data?.token){
        localStorage.setItem("TOKEN",response.data.token);
      }

      this.localStorageService.store("TOKEN",response.data?.token);
    }
  )

 }

  saveAuthenticateInformation (authData : any ) : void{

    this.sessionStorageService.store("authenticateInformation", authData);
  }

  getAuthenticateInformation () {
    return this.sessionStorageService.retrieve ('authenticateInformation');

  }

  saveClientInformation (clientInfo : any) : void{
    this.sessionStorageService.store ("clientInformation", clientInfo);
  }

  getClientInformation (){
    return this.sessionStorageService.retrieve("clientInformation")
  }

  saveSelfie (photo : any): void{
    this.sessionStorageService.store("photoFace",photo);
  }



  getSelfie () : Photo {
    console.log(this.sessionStorageService.retrieve('photoFace'));
    return this.sessionStorageService.retrieve('photoFace');
  }

  saveDocument (key : string, document : any): void{
    this.sessionStorageService.store(key,document);
  }

  getDocument (key : string): any{
    return this.sessionStorageService.retrieve(key);
  }

}
