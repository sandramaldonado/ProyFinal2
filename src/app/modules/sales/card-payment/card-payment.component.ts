import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SalesService } from "@app/services/sales/sales.service";
import { WebstoreService } from "@app/services/webstore/webstore.service";
import { environment } from "@env";

@Component({
    selector: 'app-card-payment',
    templateUrl: './card-payment.component.html',
    styleUrls: ['./card-payment.component.scss']
})

export class CardPaymentComponent implements OnInit {

    title = "Configura tu tarjeta de crédito o débito";
    message = "Introduce tu tarjeta de débito o crédito para que puedas pagar tus servicios VIVA cada mes.";
    person: any;

    microFrontKeys = {
        url: environment.urlCardPayMicrofrontApp,
        id: 'card-pay-microfront-app'
    }
    public userId: any;
    public microFrontParamIn: any = {}
    public paramClass = {
        rowItem: 'row',
        col1: 'col-1',
        col11: 'col-11',
        col12: 'col-12',
        col6: 'col-6',
        sizeForm: 'tamañodiv form-field',
        labelInput: 'hasEvents',
        labelAlert: 'matError text-danger',
        txtCenter: 'text-center',
        customBtn: 'custom-button',
        appearance: 'outline',
        floatLabel: 'always',
        backgroundgreend: 'backgroundgreend',
        p15: 'padding15',
        aCenter: 'align-items-center'
    }
    fullNames: string | undefined;
    fullLastNames: string | undefined;
    offertotaltariff: any;

    constructor(
        private webstoreService: WebstoreService,
        private salesService: SalesService,
        private router: Router
    ) { }

    ngOnInit(): void {
        const orderId = this.webstoreService.getDataInSession('orderMainId');
        this.person = this.webstoreService.getClientInformation();
        const urlTerms = 'https://www.viva.com.bo/';

        console.log('*****TOKEN');
        const token = this.webstoreService.getDataInSession('token');
        console.log(token);
        this.offertotaltariff = this.webstoreService.getDataInSession('offertotaltariff');
        console.log("****this.offertotaltariff")
        console.log(this.offertotaltariff)
        this.fullNames = this.getNames();
        this.fullLastNames = this.getLastNames();

        this.microFrontParamIn = {
            theme: "light-green",
            orderType: "SALES",
            orderId: orderId ? orderId : null,
            channel: "LANDING",// LANDING | OMEGA3
            entityType: "partyId",//cableado
            entityId: this.person && this.person.personId ? this.person.personId : null,//cableado,
            language: "es",
            termsOfService: { mode: "required", url: urlTerms }, // mode: required | option
            currency: "BOB",
            cart: [{ sellerId: 'NT', sellerDesc: 'Viva' }],
            recurring: "required", // required | option
            fullNames: this.fullNames,
            fullLastNames: this.fullLastNames,
            uniqueId: null,
            payAmountMode: "required", // optional/required > CUANDO EL CHANEL ES OMEGA 3 Y EL PAY AMOUNT ES REQUIRED SE REALIZARA EL ENVIO DE MONTO DE LO CONTRARIO ENVIAR 0 
            user: this.person,
            amount: this.offertotaltariff,
            token: token
            //OMEGA3
            //payAmountMode: optional/required 
            //si es contra entrega no mostrar el monto
        }
    }

    getNames() {
        const data = this.person;
        let name = data.name;
        if (data.middleName != null) {
            name = name + ' ' + data.middleName;
        }
        return name.trim();
    }

    getLastNames() {
        const data = this.person;
        let lastName = data.lastName1;
        if (data.lastName2 != null) {
            lastName = lastName + ' ' + data.lastName2;
        }
        return lastName.trim();
    }

    toSendString(data: any) {
        return JSON.stringify(data);
    }
    
    dataPayMent(event: any): void {
        if (event) {
            console.log(event)
            const offernumberofentities = this.webstoreService.getDataInSession('offernumberofentities');
            const ordermainid = this.webstoreService.getDataInSession('ordermainid');
            const plancompositioncode = this.webstoreService.getDataInSession('plancompositioncode');
            const data = {
                orderNumber: ordermainid,
                saleType: "EXPRESS",// CABLEADO
                processType: "PTFSALE",// CABLEADO
                planCodeList: [plancompositioncode],// CABLEADO
                rawData: "",// CABLEADO
                totalPrice: "0",// CABLEADO
                totalItems: offernumberofentities,
                deliveryMethod: "MANUAL",// CABLEADO
                requiresCashbox: "0",// CABLEADO
                requiresBonification: "0",// CABLEADO
                requiresCustomerApproval: "0",// CABLEADO
                requiresValidateCustomerData: "0",// CABLEADO
                system: "LANDING"
            }
            console.log(data);
            this.salesService.startOrder(this.webstoreService.getDataInSession('token'), data).subscribe((res: any) => {
                console.log(res)
                this.router.navigate(['/payment-done']);
            });
        }
    }
}