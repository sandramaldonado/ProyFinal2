import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as cts from "@shared/utils/constants";
import { environment } from 'src/environments/environment';
import { WebstoreService } from "@services/webstore/webstore.service";
import { CoverageService } from '@app/services/coverage/coverage.service';
import { response } from 'express';
import { OrdersService } from '@app/services/orders.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-check-coverage',
  templateUrl: './check-coverage.component.html',
  styleUrls: ['./check-coverage.component.scss']
})
export class CheckCoverageComponent implements OnInit {

  zoom = 118;
  center: google.maps.LatLngLiteral = { lat : -17.393847, lng:-66.157328};
  options: google.maps.MapOptions = {
    //mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 8,
  };

  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];
  cities = cts.cities;

  client: any;
  orderId: any;
  userId: any;
  addressList: any[] = [];
  urlPersonInfoMicrofront = environment.urlPersonInfoMicrofront;
  public addressParamClass: any = {
    contentExistAddress: ' spacer-form',
    contentAddress: ' full-width bg-section padding-section',
    contentGroupBtn:{

      contentGroup: ' content-group-btn',
      buttons: ' section-group-buttons mr-5 ml-5 color-primary ',
      textButton: ' icon-text-button mr-10',
      btnColor: ' color-primary',
      finalBtnSave: ' dialog-button color-accent',
      finalBtnCancel: ' dialog-button',
      btnAction: ' dialog-button'
    },
    section:{

      contentSubtitle: ' dialog-subtitle ',
      inputSingleWidth: ' input-single-width ',
      sectionFormInput: ' section-form-input width-form-input  ',
      sectionFormCombo: ' section-form-combobox width-form-input  ',
      sectionFormInput2: ' section-form-input width-form-input  ',
      sectionFormCombo2: ' section-form-combobox width-form-input  ',
      sectionFormGeneral:' section-form-general ',
      sectionFormPart2: ' section-form-flex-90 ',
      closeFormButton:' close-form-button color-primary ',
      btnColor:' color-primary ',
      title:' dialog-title full-width ',
      subtitle:' dialog-subtitle ',
      divider:' divider-line ',
      content: ' pending-section-content bg-section size-section space-element-right ',
      color: ' blue-theme '
    },
    space:{

      spaceSmall: 'spacer-form-small',
      spaceNormal: 'spacer-form'
    },
    modal:{

      iconArrow:'arrow-circle-back',
      map: 'full-width'
    },
    formGroup: {
      formContent: 'space-element',
      formElement: 'space-element-right',
    },
    contentHeader: 'space-element',
  };

  public microfrontParamIn: any = {
    orderId: 0,
    sequence: 0,
    userId: 5,
    microfrontId: 'address-microfront-app',
}

  microfrontUrl = 'https://view360.devnt.ssidevops.com/person-info-microfront-app/main.js';

  public environment : any;
  public hasCoverage : boolean= false;
  public visited : boolean = false;
  public addressSelected : boolean = false;

  @Input() selfLoaded : boolean = true;
  @Output() nextCoverageStep = new EventEmitter<any>();
  validDataCoverage: any;
  addresses: any[] = [];




  constructor(
    private webstoreService : WebstoreService,
    private coverageService : CoverageService,
    private ordersService: OrdersService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    if(this.selfLoaded){

      this.load();

      this.client = this.webstoreService.getClientInformation();
      this.orderId = this.webstoreService.getDataInSession('orderMainId');
      this.userId = this.webstoreService.getDataInSession('userId');
      this.microfrontParamIn  = {
        orderId: this.orderId,
        sequence: 0,
        userId: this.userId,
        microfrontId: 'address-microfront-app',
      }
    }
  }

  load(){
    this.webstoreService.saveToken();
    const env : any = {};
    const browserWindow : any = window || {};

    const browserWindowEnv : any = browserWindow['__env'] || {};
    console.log("browserWindowEnv: ",browserWindowEnv)

    navigator.geolocation.getCurrentPosition((position) => {

      console.log (typeof position.coords.latitude)
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  verificarCobertura(): void {

    var data = {
      "lng": this.markerPositions[0].lng,
      "lat": this.markerPositions[0].lat,
      "verificationTAC": "47626",
      "maxVel": null,
      "formId": 534077243,
      "processId": 46537322758,
      "consumptionEntityType" : "IFIXED"
  }
  console.log(data)

  this.coverageService.checkCoverage(data,this.webstoreService.getDataInSession('token'))
  .subscribe(res =>{
    let response = res.data.data.responseService;
    console.log(response);
    if(response.errorCode == 'OK' && response.hasCoverage=='OK'){
      this.hasCoverage=true;
      this.validDataCoverage = data;
    }
    else
      this.hasCoverage=false;
  });

  }


  addMarker(event: google.maps.MapMouseEvent) {
    console.log("click en el mapa", event.latLng?.toJSON());

    if(event.latLng != null){
      this.markerPositions = [];
      this.markerPositions.push(event.latLng.toJSON());
    }

    this.verificarCobertura();

  }

  onSubmit(){

  }

  changeCity(event: any ): void{

    console.log(event.target.value);
    let citySelected = this.cities.find(e=>e.valueField==event.target.value);
    if(citySelected?.longitude && citySelected?.latitude){
      this.markerPositions =[];
      this.center = {
        lat: citySelected?.latitude,
        lng: citySelected?.longitude,
      }
    }


  }
  locateCurrentLocation(){

    navigator.geolocation.getCurrentPosition((position) => {
      console.log (position)
      this.markerPositions = []
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })

  }

  next(){
    this.coverageService.saveCoverageData(this.validDataCoverage);
    this.visited = true;
    this.nextCoverageStep.emit(true);
    this.registerAddress();
  }

  updateAddressComplete(event: any){
    console.log(event);
    this.addresses = event.detail.microfrontData;
    this.addresses.forEach((address: any) => {
       if(address.selected){
        this.addressSelected = true;
       }
    });
  }

  registerAddress(){
    if(!this.addresses || this.addresses.length===0) return;
    const param = {
      "orderId": this.orderId,
      "sequence": 1,
      "userId": this.userId,
      "microFrontendId": "address-microfront-app",
      "microFrontendData": JSON.stringify(this.addresses),
      "statusCode": "INI"
    }
    this.ordersService.registerOrderView(param, this.webstoreService.getDataInSession('token')).subscribe(
      response => {
        console.log(response);
        this.webstoreService.saveDataInSession('addressData', this.addresses);
      });
  }


}
