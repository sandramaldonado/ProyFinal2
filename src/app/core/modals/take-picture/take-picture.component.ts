import { Component, OnInit } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import { WebstoreService } from "@services/webstore/webstore.service";
import * as moment from "moment";
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.scss']
})
export class TakePictureComponent implements OnInit {
  public widthDisplayCamera : number = 270;
  public webcamImage: WebcamImage | undefined ;
  private trigger: Subject<void> = new Subject<void>();
  source ? : string;
  previewImage? : string;
  webstoreImage? : string;


  constructor(
     public bsModalRef: BsModalRef,
     public webstore : WebstoreService
    ) { }

  ngOnInit(): void {
    console.log("fuente :", this.source);
    if(this.source){
      this.webstoreImage = this.webstore.getDocument(this.source);
      if(this.webstoreImage)
      this.previewImage = this.webstoreImage;
    }
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);

    this.webcamImage = webcamImage;
    this.previewImage = webcamImage.imageAsDataUrl;

  }

  public triggerSnapshot(): void {
    this.trigger.next();

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  savePicture(){
    if(this.source){
      this.webstoreImage= this.webcamImage?.imageAsDataUrl;
      this.webstore.saveDocument(this.source, this.webstoreImage);
    }

    this.bsModalRef.hide();

  }

  removePicture(){
    if(this.source){
      this.webstoreImage= "";
      this.previewImage = ""
      this.webstore.saveDocument(this.source, this.webstoreImage);
    }
  }

}
