import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { WebstoreService } from "@app/services/webstore/webstore.service";
import { environment } from "@env";

@Component({
    selector: 'app-card-payment',
    templateUrl: './card-payment.component.html',
    styleUrls: ['./card-payment.component.scss']
})

export class CardPaymentComponent implements OnInit {

    microFrontKeys = {
        url: environment.urlCardPayMicrofrontApp,
        id: 'card-pay-microfront-app'
    }
    public userId: any;
    public microFrontParamIn = {
        theme: "light-green",
        orderType: "SALES",
        orderId: "1000000568",
        channel: "LANDING",
        entityType: "customerId",
        entityId: "1098757",
        language: "es",
        termsOfService: "{'mode':'optional','url':'www.google.com'}", // mode: required | option
        amount: "150.90",
        currency: "150.90",
        cart: "[{'sellerId':'NT', 'sellerDesc':'Viva', 'detail':[{'code':'HU-P20','desc':'HUAWEI P20 Pro', 'amount':120.90', 'currency':'Bs'},{'code':'HF120','desc':'Hands free', 'amount':30.00'', 'currency':'Bs'}]]",
        recurring: "required", // required | option
        user: {},
        microfrontId: 'card-pay-microfront-app',
    }
    public paramClass = {
        rowItem: 'row',
        containerInput: 'col-12',
        containerInputMiddle: 'col-6',
        containerField: 'd-flex flex-column justify-content-around align-items-center',
        sizeForm: 'tamañodiv form-field',
        labelInput: 'has-events',
        labelAlert: 'matError text-danger',
        txtCenter: 'text-center',
        customBtn: 'custom-button',
        appearance: 'outline',
        floatLabel: 'always'
    }

    @Output() nextCoverageStep = new EventEmitter<any>();
    title = "Configura tu tarjeta de crédito o débito";
    message = "Introduce tu tarjeta de débito o crédito para que puedas pagar tus servicios VIVA cada mes.";

    constructor(
        private webstoreService: WebstoreService
    ) {
        console.log("########environment")
        console.log(environment)
    }

    ngOnInit(): void {
        console.log("*******getAuthenticateInformation")
        console.log(this.webstoreService.getClientInformation())//SIRVE
        this.microFrontParamIn.user = this.webstoreService.getClientInformation();
        console.log(this.microFrontParamIn.user)
        console.log("*******getAuthenticateInformation")
        console.log(this.webstoreService.getAuthenticateInformation())
        console.log("*******getMovilListInformation")
        console.log(this.webstoreService.getMovilListInformation())
    }

    toSendString(data: any) {
        return JSON.stringify(data);
    }

    next() {
        this.nextCoverageStep.emit(true);
    }
}