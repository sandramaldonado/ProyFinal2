import { Component, OnInit } from '@angular/core';
import { TakePictureComponent } from '@app/modals/take-picture/take-picture.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {
  }

  openModalWithComponent() {

  }

  uploadFirstDocument() : void {

  }

  takePictureFirstDocument(){
    const initialState: ModalOptions = {
      /*
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'

      }
      */
    };
    this.bsModalRef = this.modalService.show(TakePictureComponent);
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  uploadSecondDocument() : void {

  }

  takePictureSecondDocument() : void {

  }

  uploadFacePicture() : void {

  }

  takeFacePicture() : void {

  }

}
