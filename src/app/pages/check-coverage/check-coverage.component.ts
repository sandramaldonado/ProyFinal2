import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-coverage',
  templateUrl: './check-coverage.component.html',
  styleUrls: ['./check-coverage.component.scss']
})
export class CheckCoverageComponent implements OnInit {

  zoom = 118;
  center: google.maps.LatLngLiteral = { lat : -17.393847, lng:-66.157328};
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 18,
    minZoom: 8,
  }

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log (position)
      this.center = {
        lat: -17.393847, // position.coords.latitude,
        lng: -66.157328 //position.coords.longitude,
      }
    })
  }

}
