import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebstoreService } from '@app/services/webstore/webstore.service';

@Component({
  selector: 'app-almost-done',
  templateUrl: './almost-done.component.html',
  styleUrls: ['./almost-done.component.scss']
})
export class AlmostDoneComponent implements OnInit {
  stateLocation: Boolean = false;
  locationInfo: any;
  product: any;
  producto: any;
  constructor(private router:Router, private webstoreService: WebstoreService) {
    this.locationInfo = this.webstoreService.getDeliveryStoreMethod();
    console.log(this.locationInfo);
   }

  ngOnInit(): void {
    this.stateLocation = this.locationInfo?.state;
    console.log(this.stateLocation);
    console.log("need implementation?");
    this.product = this.webstoreService.getPlanComposition();
    this.producto = this.product["groupTradeName"];
  }

  detalle(){
    console.log('asda');
    this.router.navigate(['/','detalle-compra']);
  }

}
