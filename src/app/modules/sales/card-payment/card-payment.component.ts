import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SalesService } from "@app/services/sales/sales.service";
import { WebstoreService } from "@app/services/webstore/webstore.service";
import { environment } from "@env";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-card-payment',
    templateUrl: './card-payment.component.html',
    styleUrls: ['./card-payment.component.scss']
})

export class CardPaymentComponent implements OnInit {

    title = "Configura tu tarjeta de crédito o débito";
    message = "Introduce tu tarjeta de débito o crédito, si activas tus pagos automáticos podrás pagar tus servicios VIVA cada mes.";
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
        aCenter: 'align-items-center',
        txtEnd: 'text-end'
    }
    fullNames: string | undefined;
    fullLastNames: string | undefined;
    offertotaltariff: any;
    statusscoring: any;
    code: any;
    paymentMethod = false;

    constructor(
        private webstoreService: WebstoreService,
        private salesService: SalesService,
        private router: Router,
        private spinner: NgxSpinnerService
    ) { }

    ngOnInit(): void {
        const orderId = this.webstoreService.getDataInSession('orderMainId');
        this.person = this.webstoreService.getClientInformation();
        const urlTerms = 'https://www.viva.com.bo/';
        console.group();
        console.log('*****TOKEN');
        const token = this.webstoreService.getDataInSession('token');
        console.log(token);
        this.offertotaltariff = this.webstoreService.getDataInSession('offertotaltariff');
        console.log("****this.offertotaltariff")
        console.log(this.offertotaltariff)
        this.fullNames = this.getNames();
        this.fullLastNames = this.getLastNames();
        this.statusscoring = this.webstoreService.getDataInSession('statusscoring');
        console.log("******statusscoring")
        console.log(this.statusscoring)

        this.code = this.webstoreService.getOfferConsuptioncode();
        const descRecurring = this.getRecurring(this.statusscoring);
        console.log('descRecurring ',descRecurring)

        console.log('offerconsumptionformcode ',this.code);
        console.log("******code OfferConsuptioncode")
        const automaticpaymentCheck = this.webstoreService.getDataInSession("automaticpayment");
        const paymentMethod = this.webstoreService.getDataInSession("paymentMethod");
        if(paymentMethod === "uponDelivery") {
            this.offertotaltariff = 0;
        } 
        // const webStorage = this.webstoreService.getOfferConsuptioncode();
        // CONTROLAR ATRIBUTOS OBLIGATORIOS
        this.microFrontParamIn = {
            // theme: "light-green",
            orderType: "SALES",
            orderId: orderId ? orderId : null,
            system: "LANDING",// LANDING | OMEGA3
            entityType: "partyId",//cableado
            entityId: this.person && this.person.personId ? this.person.personId : null,//cableado,
            language: "es",
            termsOfService: { mode: "required", url: urlTerms }, // mode: hide |required | option == permite pasar y no es obligatorio
            currency: { code: 'BOB', description: 'Bs' },
            cart: [{ sellerId: 'NT', sellerDesc: 'Viva' }],
            recurring: { mode: descRecurring, value: automaticpaymentCheck ? automaticpaymentCheck : false }, // required | option | preselected
            fullNames: this.fullNames,
            fullLastNames: this.fullLastNames,
            uniqueId: null,
            payAmountMode: 'hide', // optional/NULL / hide > CUANDO EL CHANEL ES OMEGA 3 Y EL PAY AMOUNT ES REQUIRED SE REALIZARA EL ENVIO DE MONTO DE LO CONTRARIO ENVIAR 0 
            user: this.person,
            amount: this.offertotaltariff,
            token: token
            //OMEGA3
            //payAmountMode: optional/required 

            // Bloquear el switch cuando llega pago automatico de pantalla anterior
            // si es prepago ocultar pago automatico
            //si es contra entrega y prepago no mostrar el monto y el radio button
        }
        console.log(this.microFrontParamIn)
        console.groupEnd()
    }

    // visible(){
    //     console.log(this.code);
    //     let show = false;
    //     if (this.code == "CCOPOS"){    
    //         show = true;
    //     }
    //     return show;
    // }
/**
 * Si el flujo es normal -> 
                el check de pagos recurrentes es obligatorio= disabled

 * si el flujo es express y la pantalla anterior habilito pago recurrente -> 
                el check de pagos recurrentes es obligatorio (Preselected)

 * si el flujo es express y la pantalla anterior no habilito el pago recurrente -> 
                el check de pagos recurrentes seria Opcional 
    ¿en que dato de la sesion tenemos el el tipo de flujo Express o Normal?
    R.- statusscoring 
 */

    getRecurring(recurring: string) {
        // required | optional | preselected | hide
        console.log('code ',this.code)
        var desc = 'preselected';
        if (recurring == 'NORMAL') {
            desc = 'required';
        }
        if (this.code == "CCOPOS" && recurring == 'EXPRESS') { // TIPBATVF: CCOPOS Y EXPRESS
            desc = 'optional';
        }
        if(this.code == "CCOPRE") { // LTEPREO3
            desc = 'hide';
        }
        return desc;
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
            this.spinner.show();                
            console.log(event)
            const offernumberofentities = this.webstoreService.getDataInSession('offernumberofentities');
            const ordermainid = this.webstoreService.getDataInSession('ordermainid');
            const plancompositioncode = this.webstoreService.getDataInSession('plancompositioncode');
            const data = {
                orderNumber: ordermainid,
                saleType: this.statusscoring,
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
                this.spinner.hide();                
                this.router.navigate(['/payment-done']);
            });
        }
    }

    /*contentTermAndConditions: 'row backgroundgreend align-items-center',
        sectionCheckBoxTermAndConditions: 'col-1',
        colorCheckBoxTermAndConditions: 'primary',
        divLabel: 'col-11',
        refLink: '',
        alertTermContent: 'row',
        alertTermBody:'col-12',
        contentAmount: 'row align-items-center',
        bodyAmount:'col-12',
        contentAmountCheck: 'row align-items-center',
        bodyAmountCheck:'col-12',
        cardNumberContent:'row',
        matFormField: 'tamañodiv form-field col-12',
        txtMatLabel: 'hasEvents',
        cardNumberErrorLabel: 'matError text-danger',
        contentSecond:'row',
        contentSecondVence:'col-6',
        contentSecondMatFormLabel: 'tamañodiv form-field col-12',
        matFloatLabel: 'always',
        contentTooglePay:'row padding15',
        bodyTooglePay: 'col-12',
        matSlideToggleColor:'primary',
        contentButton: 'text-center',
        buttomClass: 'custom-button',
        coloreButtonSubmit:'primary'*/
}        