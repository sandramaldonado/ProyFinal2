import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MovilListService } from '@app/services/movil-list.service';
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
  planService:any;
  linesList: any = [];
  internetList: any = [];
  tvList: any = [];
  movilState: Boolean = false;
  internetState: Boolean = false;
  entertainmentState: Boolean = false;
  validationForm: any;
  lineaInternet = "";
  lineaTv = "";
  limitLine = 5;

  @Output() nextMovilListStep = new EventEmitter<any>();

  title = "Elije tu Número";
  message = "Te damos algunas opciones de líneas telefónicas para que puedas tener tu nuevo plan con un número telefónico que te agrade.";
  
  constructor(private movilListService: MovilListService,
              private webstoreservice: WebstoreService,
              private formBuilder: FormBuilder) 
  { 
    this.key = sessionStorage.getItem("key");
  }

  ngOnInit(): void {
    this.armadoJsonScoring();
    this.searchList();
  }

  armadoJsonScoring(){
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

  searchList() 
  {
    var indexAux = 0;
    this.listagroup = [];
    var constrolList = "{";
    this.movilListService.getMovilList(this.planService, this.key).subscribe(
      response => {
        this.numberList = response;
        //console.log(this.numberList);
        const linesMovil = this.numberList["data"]["data"]["movil"];
        
        if (linesMovil.length > 0) {
          this.movilState = true;
          constrolList = constrolList+"'movil_control': new FormControl(null, [Validators.required]),";
          this.listagroup.push('movil_control');
          for (let index = indexAux; index < linesMovil.length; index++) {
            //{value:"store",design:"storefront",style:"background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;",name:"Recoja en Tienda",id:"1",checked:false},
            if (index == 0) {
              this.linesList.push({id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-info divOption', style: 'background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;', checked: true});  
              //this.linesList.push({id: index.toString(), name: linesMovil[index], description: 'alert alert-info divOption'});  
            } else {
              this.linesList.push({id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-secondary divOption', style: 'color: black; border-radius:12px;', checked: false});  
              //this.linesList.push({id: index.toString(), name: linesMovil[index], description: 'alert alert-secondary divOption'});
            } 
            indexAux = indexAux + 1;
          }  
        }

        const linesInternet = this.numberList["data"]["data"]["ifixed"];
        const linesEntertainment = this.numberList["data"]["data"]["tv"];
        console.log(linesInternet);
        if (linesInternet.length > 0) {
          this.lineaInternet = linesInternet[0];
          /**
          
          this.listagroup.push('internet_control');
          constrolList = constrolList+"'internet_control': new FormControl(null, [Validators.required]),";
          let indexAuxBase = indexAux;
          console.log(indexAuxBase);
          this.internetState = true;
          for (let index = 0; index < linesInternet.length; index++) {
            indexAuxBase = indexAuxBase + index;
            if (index == 0) {
              this.internetList.push({id: index.toString(), name: linesInternet[index], value: linesInternet[index], description: 'alert alert-info divOption', style: 'background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;', checked: true});  
              //this.internetList.push({id: indexAuxBase.toString(), name: linesInternet[index], description: 'alert alert-info divOption'});  
            } else {
              this.internetList.push({id: index.toString(), name: linesInternet[index], value: linesInternet[index], description: 'alert alert-secondary divOption', style: 'color: black; border-radius:12px;', checked: false});  
              //this.internetList.push({id: indexAuxBase.toString(), name: linesInternet[index], description: 'alert alert-secondary divOption'});
            } 
            indexAux = indexAux + 1;
          }  
          console.log("internetdata");
          console.log(this.internetList);
           */
        }

        console.log(linesEntertainment);
        if (linesEntertainment.length > 0) {
          this.lineaTv = linesEntertainment[0];
          /*
          this.listagroup.push('tv_control');
          constrolList = constrolList+"'tv_control': new FormControl(null, [Validators.required])";
          let indexAuxBase = indexAux;
          this.entertainmentState = true;
          for (let index = 0; index < linesEntertainment.length; index++) {
            indexAuxBase = indexAuxBase + index;
            console.log("internet "+index);
            if (index == indexAuxBase) {
              this.tvList.push({id: index.toString(), name: linesInternet[index], value: linesInternet[index], description: 'alert alert-info divOption', style: 'background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;', checked: true});  
              //this.tvList.push({id: indexAuxBase.toString(), name: linesEntertainment[index], description: 'alert alert-info divOption'});  
            } else {
              this.tvList.push({id: index.toString(), name: linesInternet[index], value: linesInternet[index], description: 'alert alert-secondary divOption', style: 'color: black; border-radius:12px;', checked: false});  
              //this.tvList.push({id: indexAuxBase.toString(), name: linesEntertainment[index], description: 'alert alert-secondary divOption'});
            } 
            indexAux = indexAux + 1;
          }  
           */
        }
        console.log(this.listagroup);
        constrolList = constrolList+"}";
        let armadoJson = JSON.stringify(constrolList);
        //this.validationForm = new FormGroup(armadoJson);

        console.log(this.linesList);
        //this.linesList.push
      }, error => {
      console.log(error);
    });
  }

  next(){
    this.nextMovilListStep.emit(true);
  }

  radioChange(event: MatRadioChange) {
    console.log(event.source.name);
    console.log(event.source.value);
    var line = event.source.value;
    const linesMovil = this.numberList["data"]["data"]["movil"];
    console.log(linesMovil);
    this.linesList = [];

    for (let index = 0; index < linesMovil.length; index++) {
      //{value:"store",design:"storefront",style:"background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;",name:"Recoja en Tienda",id:"1",checked:false},
      if (line == linesMovil[index]) {
        this.linesList.push({id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-info divOption', style: 'background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;', checked: true});  
        //this.linesList.push({id: index.toString(), name: linesMovil[index], description: 'alert alert-info divOption'});  
      } else {
        this.linesList.push({id: index.toString(), name: linesMovil[index], value: linesMovil[index], description: 'alert alert-secondary divOption', style: 'color: black; border-radius:12px;', checked: false});  
        //this.linesList.push({id: index.toString(), name: linesMovil[index], description: 'alert alert-secondary divOption'});
      } 
    }  

    /*
    if (event.source.value === 'store') {
        console.log(event.source.value);
    } else {
      alert("Servicio no disponible Temporalmente");
    }
     */
  }
  
  get movil_control() {
    return this.validationForm.get('movil_control');
  }

  get internet_control() {
    return this.validationForm.get('internet_control');
  }

  get tv_control() {
    return this.validationForm.get('tv_control');
  }

  updateOnclickMovil(e: any) {
    console.log(e.target.value);
  }
  
  updateOnclickInternet(e: any){
    console.log(e.target.value);
  }
}
