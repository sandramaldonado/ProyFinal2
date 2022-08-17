import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MovilListService } from '@app/services/movil-list.service';
import { OrdersService } from '@app/services/orders.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { RadioLines } from '@models/Radio-Lines';

@Component({
  selector: 'app-movil-list',
  templateUrl: './movil-list.component.html',
  styleUrls: ['./movil-list.component.scss']
})
export class MovilListComponent implements OnInit {
  key: any;
  planComposition: any;
  listagroup: any;
  planList: any;
  numberList: any;
  productTypeCode: any;
  planService: any;
  linesList: any = [];
  internetList: any = [];
  tvList: any = [];
  movilState: Boolean = false;
  internetState: Boolean = false;
  entertainmentState: Boolean = false;
  movilLine = "";
  wanLine = "";
  tvLine = "";
  limitLine = 5;

  @Output() nextMovilListStep = new EventEmitter<any>();

  title = "Elije tu Número";
  message = "Te damos algunas opciones de líneas telefónicas para que puedas tener tu nuevo plan con un número telefónico que te agrade.";
  visited: boolean = false;

  constructor(private movilListService: MovilListService,
    private webstoreservice: WebstoreService,
    private ordersService: OrdersService,
    private formBuilder: FormBuilder) {
    this.key = sessionStorage.getItem("key");
  }

  ngOnInit(): void {
    this.armadoJsonScoring();
    this.searchList();
  }

  armadoJsonScoring() {
    this.planComposition = this.webstoreservice.getPlanComposition();
    this.planList = this.planComposition?.planList;
    console.log(this.planComposition);
    console.log(this.planList);
    this.productTypeCode = [];
    for (let index = 0; index < this.planList.length; index++) {
      this.productTypeCode.push(this.planList[index]["consumptionEntityType"]);
    }
    this.planService = JSON.stringify({
      "userCode": "14",
      "ceTypeCodeList": this.productTypeCode,
      "processId": 165435435
    });

  }

  searchList() {
    this.listagroup = [];
    this.movilListService.getMovilList(this.planService, this.key).subscribe(
      response => {
        this.numberList = response;
        const linesMovil = this.numberList["data"]["data"]["movil"];
        if (linesMovil.length > 0) {
          this.movilState = true;
          this.listagroup.push('movil_control');
          for (let index = 0; index < this.limitLine; index++) {
            if (index < this.limitLine) {
              if (index == 0) {
                this.movilLine = linesMovil[index];
                this.linesList.push({ id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-info divOption', style: 'background-color: #AC99CE; color: white; border: 2px solid #5C349D; border-radius:15px;', checked: true });
              } else {
                this.linesList.push({ id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-secondary divOption', style: 'background-color: #F1F1F1; color: black; border-radius:15px;', checked: false });
              }
            }
          }
        }

        const linesInternet = this.numberList["data"]["data"]["ifixed"];
        const linesEntertainment = this.numberList["data"]["data"]["tv"];
        console.log(linesInternet);
        if (linesInternet.length > 0) {
          this.wanLine = linesInternet[0];
        }
        console.log(linesEntertainment);
        if (linesEntertainment.length > 0) {
          this.tvLine = linesEntertainment[0];
        }
      }, error => {
        console.log(error);
      });
  }

  next() {
    let dataMovil = {};
    let dataWan = {};
    let dataTv = {};
    let numeros = {};
    if (this.movilLine != "") {
      dataMovil = {"movil": [this.movilLine]};
    }
    if (this.wanLine != "") {
      dataWan = {"ifixed": [this.wanLine]};
    } if (this.tvLine != "") {
      dataTv = {"tv": [this.tvLine]};
    }
    numeros = Object.assign(dataMovil, dataWan, dataTv);
    let list2 = JSON.stringify({
      "data": {
        "transactionId": this.numberList["data"]["transactionId"],
        "data": numeros
    }});

    this.webstoreservice.saveMovilListinformation(list2);

    this.visited =true;
    this.registerAactivation(numeros);

    this.nextMovilListStep.emit(true);
  }

  radioChange(event: MatRadioChange) {
    var line = event.source.value;
    const linesMovil = this.numberList["data"]["data"]["movil"];
    this.linesList = [];
    this.movilLine = event.source.value;

    for (let index = 0; index < this.limitLine; index++) {
      if (line == linesMovil[index]) {
        this.linesList.push({ id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-info divOption', style: 'background-color: #AC99CE; color: white; border: 2px solid #5C349D; border-radius:15px;', checked: true });
      } else {
        this.linesList.push({ id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-secondary divOption', style: 'background-color: #F1F1F1; color: black; border-radius:15px;', checked: false });
      }
    }
  }

  clickme() {
    this.limitLine = 10;
    this.linesList = [];
    const linesMovil = this.numberList["data"]["data"]["movil"];
    if (linesMovil.length > 0) {
      this.movilState = true;
      this.listagroup.push('movil_control');
      for (let index = 0; index < linesMovil.length; index++) {
        if (index < this.limitLine) {
          if (index == 0) {
            this.linesList.push({ id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-info divOption', style: 'background-color: #AC99CE; color: white; border: 2px solid #5C349D; border-radius:15px;', checked: true });
          } else {
            this.linesList.push({ id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-secondary divOption', style: 'background-color: #F1F1F1; color: black; border-radius:15px;', checked: false });
          }
        }
      }
    }
  }

  registerAactivation(numbers: any){
    console.log(numbers);
    if(!numbers) return;
    const addressData = this.webstoreservice.getDataInSession('addressData');
    let instAddress: any;
    addressData.forEach((element: any) => {
      if(element.selected){
        instAddress = element;
      }
    });

    let microfrontData: any[] = [];

    if(numbers.movil && numbers.movil.length>0){
      microfrontData.push({
        "planType":"MOVIL",
        "serviceIdentifier":numbers.movil[0]
     });
    }
    if(numbers.ifixed && numbers.ifixed.length>0){
      microfrontData.push({
        "planType":"IFIXED",
        "serviceIdentifier":numbers.ifixed[0],
        "address":{
           "addressId":instAddress?.addressId,
           "addressTypeCode":"INS_ADDR"
        }
     });
    }
    if(numbers.tv && numbers.tv.length>0){
      microfrontData.push({
        "planType":"TV",
        "serviceIdentifier":numbers.tv[0]
     });
    }

     const param = {
      "orderId": this.webstoreservice.getDataInSession('orderMainId'),
      "sequence": 5,
      "userId": this.webstoreservice.getDataInSession('userId'),
      "microFrontendId": "activation-data-microfront-app",
      "microFrontendData": JSON.stringify(microfrontData),
      "statusCode": "INI"
    }

    this.ordersService.registerOrderView(param, this.webstoreservice.getDataInSession('token')).subscribe(
      response => {
        console.log(response);

      });
  }

}
