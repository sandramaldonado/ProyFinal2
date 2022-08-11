import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import { Photo } from '@models/Photo';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Autenticar } from '@models/Autenticar';
import { environment } from 'src/environments/environment';
import * as cts  from "@shared/utils/constants";
import { strict } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class WebstoreService {
  httpPostOptions = cts.httpPostOptions;
  httpGetOptions = cts.httpGetOptions;
  token : any;
  apiUrl : string = `${environment.SSIAuthApiUrl}`;

  constructor(
    private sessionStorageService : SessionStorageService,
    private localStorageService : LocalStorageService,
    private httpClient : HttpClient
  ) { }


 saveToken() : void{

  const token = this.httpClient.post<Autenticar>(`${environment.SSIAuthApiUrl}`,
  JSON.stringify({"username":environment.SSITokenUsername,"password": environment.SSITokenPassword}),  this.httpPostOptions)

  .subscribe(
    response =>{
      if(response.data?.token){
        localStorage.setItem("TOKEN",response.data.token);
      }

      this.localStorageService.store("TOKEN",response.data?.token);
      this.sessionStorageService.store ("token", response.data?.token);
      this.sessionStorageService.store ("userId", response.data?.userId);
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

  savePlanCompositionCode (code : string): void{
    this.sessionStorageService.store("planCompositionCode",code);
  }

  getPlanCompositionCode (): any{
    return this.sessionStorageService.retrieve("planCompositionCode");
  }

  savePlanComposition (planComposition : any): void{
    this.sessionStorageService.store("planComposition",planComposition);
  }

  getPlanComposition (): any{
    return this.sessionStorageService.retrieve("planComposition");
  }

  clearWebStorePlanComposition(){
    this.sessionStorageService.clear();
    this.sessionStorageService.clear("planCompositionCode");
    this.sessionStorageService.clear("planComposition");
  }

  saveStatusScoring (option : String): void{
    this.sessionStorageService.store("statusScoring", option);
  }

  getStatusScoring (): any{
    return this.sessionStorageService.retrieve("statusScoring");
  }

  saveDataInSession(key:string, data : any): void{
    this.sessionStorageService.store(key,data);
  }

  getDataInSession (key: string): any{
    return this.sessionStorageService.retrieve(key);
  }




}
