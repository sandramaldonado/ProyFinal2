import { Injectable } from '@angular/core';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class WebstorageService {

  constructor(
    private sessionStorageService : SessionStorageService
  ) { }

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

  getSelfie (){
    return this.sessionStorageService.retrieve("photoFace");
  }

  

}
