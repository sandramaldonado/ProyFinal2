import { Injectable } from '@angular/core';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';
import { Photo } from '../../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  @SessionStorage({key: 'facePhoto'}) facePhoto = { } as Photo;
  @SessionStorage({key: 'documentPhotoFront'}) documentPhotoFront = { } as Photo;
  @SessionStorage({key: 'documentPhotoBack'}) documentPhotoBack = { } as Photo;

  constructor() { }
}
