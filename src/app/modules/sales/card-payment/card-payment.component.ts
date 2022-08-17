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
    public microFrontParamIn: any = {}
    public paramClass = {
        rowItem: 'row',
        col1: 'col-1',
        col11: 'col-11',
        col12: 'col-12',
        col6: 'col-6',
        containerField: 'd-flex flex-row align-items-start d-flex justify-content-between',
        sizeForm: 'tamañodiv form-field',
        labelInput: 'has-events',
        labelAlert: 'matError text-danger',
        txtCenter: 'text-center',
        customBtn: 'custom-button',
        appearance: 'outline',
        floatLabel: 'always',
        backgroundGreend: 'background-green',
        p15: 'padding-15',

        // Aling items
        aCenter: 'align-items-center'
    }
    fullNames: string | undefined;
    fullLastNames: string | undefined;

    @Output() nextCoverageStep = new EventEmitter<any>();

    title = "Configura tu tarjeta de crédito o débito";
    message = "Introduce tu tarjeta de débito o crédito para que puedas pagar tus servicios VIVA cada mes.";

    constructor(
        private webstoreService: WebstoreService
    ) {
        console.log("*******getClientInformation")
        console.log(this.webstoreService.getClientInformation())//SIRVE
        console.log('*****TOKEN');
        console.log(this.webstoreService.getDataInSession('token'));
        this.fullNames = this.getNames();
        this.fullLastNames = this.getLastNames();
    }

    ngOnInit(): void {
        // console.log("*******getAuthenticateInformation")
        // console.log(this.webstoreService.getAuthenticateInformation())
        console.log("*******getMovilListInformation")
        console.log(this.webstoreService.getMovilListInformation())
        const orderId = this.webstoreService.getDataInSession('orderMainId')
        console.log("*******orderId")
        console.log(orderId)
        const person = this.webstoreService.getClientInformation();
        console.log("*******personId")
        console.log(person.personId)
        console.log("*******getPlanComposition")
        const planComposition = this.webstoreService.getPlanComposition();
        console.log(planComposition)
        const urlTerms = 'https://www.viva.com.bo/';
        const user = this.webstoreService.getClientInformation();
        
        this.microFrontParamIn = {
            theme: "light-green",
            orderType: "SALES",
            orderId: orderId ? orderId : null,
            channel: "LANDING",// LANDING | OMEGA3
            entityType: "partyId",//cableado
            entityId: person && person.personId ? person.personId : null,//cableado,
            language: "es",
            termsOfService: {mode:"required", url:urlTerms}, // mode: required | option
            amount: "150.90",
            currency: "BOB",
            cart: "[{sellerId:'NT', sellerDesc:'Viva'}]",
            recurring: "required", // required | option
            fullNames: this.fullNames,
            fullLastNames: this.fullLastNames,
            uniqueId: null,
            payAmountMode: "required", // optional/required > CUANDO EL CHANEL ES OMEGA 3 Y EL PAY AMOUNT ES REQUIRED SE REALIZARA EL ENVIO DE MONTO DE LO CONTRARIO ENVIAR 0 
            user: user
            //OMEGA3
            //payAmountMode: optional/required 
            //si es contra entrega no mostrar el monto
        }
    }

    getNames() {
        const data = this.webstoreService.getClientInformation();
        let name = data.name;
        if(data.middleName != null){
            name = name + ' ' + data.middleName;
        }
        return name.trim();
    }

    getLastNames() {
        const data = this.webstoreService.getClientInformation();
        let lastName = data.lastName1;
        if(data.lastName2 != null){
            lastName = lastName + ' ' + data.lastName2;
        }
        return lastName.trim();
    }

    toSendString(data: any) {
        return JSON.stringify(data);
    }

    next() {
        this.nextCoverageStep.emit(true);
    }
}