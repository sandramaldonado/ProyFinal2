import { Component, OnInit } from '@angular/core';
import { WebstorageService } from "../../../shared/services/webstorage/webstorage.service";
@Component({
  selector: 'app-load-picture',
  templateUrl: './load-picture.component.html',
  styleUrls: ['./load-picture.component.scss']
})
export class LoadPictureComponent implements OnInit {

  imageFromSession :string = "";
  constructor( private webStorage : WebstorageService) { }

  ngOnInit(): void {
    
  }

}
