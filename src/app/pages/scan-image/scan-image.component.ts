import { Component, EventEmitter, OnInit, AfterViewInit, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scan-image',
  templateUrl: './scan-image.component.html',
  styleUrls: ['./scan-image.component.scss']
})
export class ScanImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scanSuccess(event : any){
   // this.scanedSerial= event;
    //this.serialScanned = true;
    console.log("scanSuccess: ",event);

  }

}
