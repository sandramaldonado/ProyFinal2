import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoClientService {
  @Output() disparadorInfoClient: EventEmitter<any> = new EventEmitter(); 
  constructor() { }
}
