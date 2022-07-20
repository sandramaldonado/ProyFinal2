import { Component, OnInit } from '@angular/core';
import * as cts from "@shared/utils/constants";

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

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log (typeof position.coords.latitude)
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
  }

  verificarCobertura(): void {

  }


  addMarker(event: google.maps.MapMouseEvent) {
    console.log("click en el mapa", event.latLng?.toJSON());

    if(event.latLng != null){
      this.markerPositions = [];
      this.markerPositions.push(event.latLng.toJSON());
    }
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

}
