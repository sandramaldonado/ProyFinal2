import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '@models/Photo';
import { WebstoreService } from "@services/webstore/webstore.service";
@Component({
  selector: 'app-load-picture',
  templateUrl: './load-picture.component.html',
  styleUrls: ['./load-picture.component.scss']
})
export class LoadPictureComponent implements OnInit {

  photoFromSession : Photo = {};
  constructor( private webstore : WebstoreService) { 
  }

  ngOnInit(): void {
    
    this.photoFromSession = this.webstore.getSelfie();

    this.loadImage();
  }

  loadImage() {
    console.log(typeof this.photoFromSession.image);
  }

}
