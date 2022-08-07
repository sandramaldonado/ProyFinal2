import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as cts from "@shared/utils/constants";
import { environment } from 'src/environments/environment';
import { WebstoreService } from "@services/webstore/webstore.service";
import { CoverageService } from '@app/services/coverage/coverage.service';
import { response } from 'express';

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
    userId: 21,
    microfrontId: 'address-microfront-app',
}

  microfrontUrl = 'https://view360.devnt.ssidevops.com/person-info-microfront-app/main.js';

  public environment : any;
  public hasCoverage : boolean= false;

  @Input() selfLoaded : boolean = true;
  @Output() nextCoverageStep = new EventEmitter<any>();





  constructor(
    private webstoreService : WebstoreService,
    private coverageService : CoverageService
  ) { }

  ngOnInit(): void {
    if(this.selfLoaded){

      this.load()

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
      "lng": this.markerPositions[0].lat,
      "lat": this.markerPositions[0].lng,
      "verificationTAC": "47626",
      "maxVel": null,
      "formId": 534077243,
      "processId": 46537322758
  }
  //console.log(data)

  this.coverageService.checkGISCovarge(data)
  .subscribe(response =>{
    console.log(response);
    if(response.errorCode == 'OK' && response.hasCoverage=='OK')
      this.hasCoverage=true;
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
    this.nextCoverageStep.emit(true);
  }



}
