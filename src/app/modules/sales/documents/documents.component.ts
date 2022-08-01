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
      initialState: {

        source: 'firstDocument'

      }
    };
    this.bsModalRef = this.modalService.show(TakePictureComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  uploadSecondDocument() : void {

  }

  takePictureSecondDocument() : void {
    const initialState: ModalOptions = {
      initialState: {

        source: 'secondDocument'

      }
    };
    this.bsModalRef = this.modalService.show(TakePictureComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';

  }

  uploadFacePicture() : void {

  }

  takeFacePicture() : void {
    const initialState: ModalOptions = {
      initialState: {

        source: 'facePicture'

      }
    };
    this.bsModalRef = this.modalService.show(TakePictureComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';

  }

}
