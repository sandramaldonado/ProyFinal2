import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TakePictureComponent } from '@app/modals/take-picture/take-picture.component';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import {NgxImageCompressService} from "ngx-image-compress";
import { WebstoreService } from '@app/services/webstore/webstore.service';
import {LocalStorage, SessionStorage} from 'ngx-webstorage';
import { OrdersService } from '@app/services/orders.service';

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

  firstDocumentIsValid :boolean = false;

  @SessionStorage('secondDocument')
	public secondDocument : any;

  secondDocumentIsValid :boolean = false;

  @SessionStorage('facePicture')
	public facePicture : any;

  facePictureIsValid :boolean = false;

  previewImage? : string;
  webstoreImage? : string;
  constructor(
    private modalService: BsModalService,
    private imageCompress: NgxImageCompressService,
    private webstoreService : WebstoreService,
    private ordersService: OrdersService,
    ) {}

  ngOnInit(): void {
  }

  openModalWithComponent() {

  }


  uploadFirstDocument(){
    this.uploadAndCompress("firstDocument");
    this.firstDocumentIsValid = true;
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
    this.secondDocumentIsValid = true;
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
    this.facePictureIsValid = true;
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
  removeFirstDocument(){
    this.firstDocumentIsValid = false;
    this.webstoreService.saveDocument('firstDocument','');

  }
  removeSecondDocument(){
    this.secondDocumentIsValid=false;
    this.webstoreService.saveDocument('secondDocument','');

  }
  removeFacePicture(){
    this.facePictureIsValid = false;
    this.webstoreService.saveDocument('facePicture','');

  }

  validateDocuments(): boolean{
    let res = false;

    res= this.firstDocument != "" && this.secondDocument != "" && this.facePicture != "";
    return res
  }
  next(){
    this.visited =true;
    this.nextDocumentStep.emit(true);
    this.registerDocuments();
  }

  formatImgData(imageBase64: any): string{
    let data = imageBase64.split(',');
    if(data.length > 1){
      return data[1];
    }
    return data[0];
  }


  registerDocuments(){
    const client = this.webstoreService.getClientInformation();
    const ci_front = this.formatImgData(this.webstoreService.getDataInSession('firstDocument'));
    const ci_back = this.formatImgData(this.webstoreService.getDataInSession('secondDocument'));
    const photo = this.formatImgData(this.webstoreService.getDataInSession('facePicture'));
    const param = {
      "partyId": client.personId,                   //partyId es el personId del cliente CRM -- Obligatorio
      "partyName": client.fullName,  //Nombre completo el cliente-- Obligatorio
      "orderType": "PTFSALE",     //Tipo de order -- Obligatorio
      "serviceType": "NORMAL",     //Tipo de servicio en este caso "NORMAL" -- Obligatorio
      "orderId": this.webstoreService.getDataInSession('orderMainId'),               //orderId después de invocar al servicio que genera la orden  -- Obligatorio
      "documents": [                         //Lista de documentos imagens -- Obligatorio
        {
          "fileCode": "CI_FRONT",      //código de tipo de archivo  -- Obligatorio
          "fileFormat": "png",                                 // png , jpg, gif etc
          "file": ci_front  // Imagen en base64-- Obligatorio
        },
        {
          "fileCode": "CI_BACK",      //código de tipo de archivo  -- Obligatorio
          "fileFormat": "png",                                 // png , jpg, gif etc
          "file": ci_back  // Imagen en base64-- Obligatorio
        },
        {
          "fileCode": "PHOTO_CUSTOMER",      //código de tipo de archivo  -- Obligatorio
          "fileFormat": "png",                                 // png , jpg, gif etc
          "file": photo  // Imagen en base64-- Obligatorio
        }
      ]
    }
    console.log(JSON.stringify(param));
    this.ordersService.uploadDocuments(param, this.webstoreService.getDataInSession('token')).subscribe(
      response => {
        console.log(response);
        const param = {
          documents: response
        };
        this.registerDocumentsOrder(param);
      });
  }


  registerDocumentsOrder(data: any){
    const param = {
      "orderId": this.webstoreService.getDataInSession('orderMainId'),
      "sequence": 4,
      "userId": this.webstoreService.getDataInSession('userId'),
      "microFrontendId": "digitization-sale-microfront-app",
      "microFrontendData": JSON.stringify(data),
      "statusCode": "INI"
    }
    this.ordersService.registerOrderView(param, this.webstoreService.getDataInSession('token')).subscribe(
      response => {
        console.log(response);
      });
  }

}
