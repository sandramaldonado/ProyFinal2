import { Component, OnInit } from '@angular/core';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import { WebstoreService } from "@services/webstore/webstore.service";
import * as moment from "moment";

@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.scss']
})
export class TakePictureComponent implements OnInit {
  public widthDisplayCamera : number = 270;
  public webcamImage: WebcamImage | undefined ;
  private trigger: Subject<void> = new Subject<void>();

  constructor(
    private webstore : WebstoreService
  ) { }

  ngOnInit(): void {
  }

  public handleInitError(error: WebcamInitError): void {
    if (error.mediaStreamError && error.mediaStreamError.name === "NotAllowedError") {
      console.warn("Camera access was not allowed by user!");
    }
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.info('received webcam image', webcamImage);

    this.webcamImage = webcamImage;
  }

  public triggerSnapshot(): void {
    this.trigger.next();

  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public savePicture (){
    let name = moment().valueOf() + ".jpg";
    this.webstore.saveClientInformation(name);

    this.webstore.saveSelfie({
      name : name,
      image : this.webcamImage?.imageAsDataUrl
    });


  }

}
