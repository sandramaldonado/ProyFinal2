import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TakePictureComponent } from '@app/modals/take-picture/take-picture.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {NgxImageCompressService} from "ngx-image-compress";
import { WebstoreService } from '@app/services/webstore/webstore.service';
import {LocalStorage, SessionStorage} from 'ngx-webstorage';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {

  bsModalRef?: BsModalRef;
  @Output() nextDocumentStep = new EventEmitter<any>();
  visited: boolean = false;

  @SessionStorage('firstDocument')
	public firstDocument : any;

  @SessionStorage('secondDocument')
	public secondDocument : any;

  @SessionStorage('facePicture')
	public facePicture : any;

  previewImage? : string;
  webstoreImage? : string;
  constructor(
    private modalService: BsModalService,
    private imageCompress: NgxImageCompressService,
    private webstoreService : WebstoreService
    ) {}

  ngOnInit(): void {
  }

  openModalWithComponent() {

  }


  uploadFirstDocument(){
    this.uploadAndCompress("firstDocument");
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
    this.uploadAndCompress("secondDocument");
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
    this.uploadAndCompress("facePicture");
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

  uploadAndCompress (source : string){
    //console.log(source);

    let me= this;

    this.imageCompress.uploadFile()
    .then(({image, orientation}) => {


      /*
      let dateInMillisec = moment().valueOf();
      let extension = image.split(';')[0];
      extension = extension.split("/").pop();
      //console.log(extension);
      if(extension ==='jpeg'){
        extension ='jpg';
      }
      let fileName = dateInMillisec + '.'+ extension;
      */
      let size = this.imageCompress.byteCount(image);

      if(size > 400000){
        //this.openModalLoaderComponent("Cargando imagen",3);
        console.log('Size in bytes was:', this.imageCompress.byteCount(image));
        let proporcion= 100;

        if(size <= 500000){
          proporcion = 80;
        }else if(size<1000000){
          proporcion=70;
        }else if (size < 2000000){
          proporcion = 60;
        }else if(size<5000000){
          proporcion=40;
        }else if(size < 7000000){
          proporcion=30;
        }else if(size < 10000000){
          proporcion=20;
        }else{
          proporcion = 10;
        }

        //console.log(proporcion);

        this.imageCompress.compressFile(image, orientation, proporcion, 90).then(
          imageAsBase64 => {
            me.webstoreService.saveDocument(source,imageAsBase64);
            /*
            setTimeout(() => {
              this.closeModal();

            }, 1000);
            */

            console.log('(>400000)Size in bytes is now:', this.imageCompress.byteCount(imageAsBase64));
          }
        );

      }else{
        this.imageCompress
          .compressFile(image, orientation, 90, 90) // 50% ratio, 50% quality
          .then(
            (imageAsBase64) => {
              me.webstoreService.saveDocument(source,imageAsBase64);
              console.log("(<400000)Size in bytes after compression is now:", this.imageCompress.byteCount(imageAsBase64));
            }
          );

      }

    })
    .catch(error =>{
      //console.log(error);

    });
  }

  next(){
    this.visited =true;
    this.nextDocumentStep.emit(true);
  }

}
