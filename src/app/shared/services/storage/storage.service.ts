import { Injectable } from '@angular/core';
import { CookieStorage, LocalStorage, SessionStorage, SessionStorageService } from 'ngx-store';
import { Client } from '../../models/Client';
import { Photo } from '../../models/Photo';

@Injectable({
  providedIn: 'root'
})

// this variables will be stored in Session
export class StorageService {
  @SessionStorage({key: 'facePhoto'}) facePhoto = { } as Photo;
  @SessionStorage({key: 'documentPhotoFront'}) documentPhotoFront = { } as Photo;
  @SessionStorage({key: 'documentPhotoBack'}) documentPhotoBack = { } as Photo;
  @SessionStorage({key: 'clientInformation'}) clientInformation = { } as Client;
  @SessionStorage ({key: 'authenticateInformation'}) authentichateInformation : any ; 

  constructor( 
    private sessionStorageService : SessionStorageService
  ) { 

  }

  setAuthenticateInformation (data : any) : void{
    this.sessionStorageService.set ("authenticateInformation", data);
  }

  getAuthenticateInformation () : any {
    return this.authentichateInformation;
  }

  savePhotoFace (name : string, imageBase64 : string): void{
    this.sessionStorageService.set("photoFace", {name : name, image : imageBase64} );

  }








}
