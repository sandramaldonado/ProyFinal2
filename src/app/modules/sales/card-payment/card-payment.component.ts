import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
     
    constructor(
        private webstoreService: WebstoreService,
        private router: Router
    ) {}

    ngOnInit(): void {
        const orderId = this.webstoreService.getDataInSession('orderMainId');
        this.person = this.webstoreService.getClientInformation();
        const urlTerms = 'https://www.viva.com.bo/';

        console.log('*****TOKEN');
        const token = this.webstoreService.getDataInSession('token');
        console.log(token);

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
            termsOfService: {mode:"required", url:urlTerms}, // mode: required | option
            amount: "150.90",
            currency: "BOB",
            cart: [{sellerId:'NT', sellerDesc:'Viva'}],
            recurring: "required", // required | option
            fullNames: this.fullNames,
            fullLastNames: this.fullLastNames,
            uniqueId: null,
            payAmountMode: "required", // optional/required > CUANDO EL CHANEL ES OMEGA 3 Y EL PAY AMOUNT ES REQUIRED SE REALIZARA EL ENVIO DE MONTO DE LO CONTRARIO ENVIAR 0 
            user: this.person,
            token: token
            //OMEGA3
            //payAmountMode: optional/required 
            //si es contra entrega no mostrar el monto
        }
    }

    getNames() {
        const data = this.person;
        let name = data.name;
        if(data.middleName != null){
            name = name + ' ' + data.middleName;
        }
        return name.trim();
    }

    getLastNames() {
        const data = this.person;
        let lastName = data.lastName1;
        if(data.lastName2 != null){
            lastName = lastName + ' ' + data.lastName2;
        }
        return lastName.trim();
    }

    toSendString(data: any) {
        return JSON.stringify(data);
    }
    dataPayMent(event: any): void{
        console.log(event.detail)
        console.log(event.detail.data)
        this.router.navigate(['/payment-done']);
    }
}