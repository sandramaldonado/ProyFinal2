import { Component, OnInit } from '@angular/core';
import { WebstoreService } from '@app/services/webstore/webstore.service';

@Component({
  selector: 'app-payment-done',
  templateUrl: './payment-done.component.html',
  styleUrls: ['./payment-done.component.scss']
})
export class PaymentDoneComponent implements OnInit {

  orderId: any;
  constructor(
    private webstoreService: WebstoreService,
  ) {
    this.orderId = this.webstoreService.getDataInSession('orderMainId')
    console.log("*******orderId")
    console.log(this.orderId)
  }

  ngOnInit(): void {
    console.log("functions can't be empty");
  }

  /*getToken() {
    this.tokenService.gettoken()
      .subscribe(response => {
        this.autentication = response;
        this.getPlansList();
      });
  }*/

  onClick() {
    // this.webstoreService.saveDataInSession("offerConsumptionFormCode",this.consumptionFormCode);
    // this.calculateTotalOfferTariff()
    // this.router.navigate(['/client/validationClient']);

  }



}
