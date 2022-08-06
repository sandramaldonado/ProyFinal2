import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  linesList: RadioLines[] = [];
  internetList: RadioLines[] = [];
  tvList: RadioLines[] = [];
  movilState: Boolean = false;
  internetState: Boolean = false;
  entertainmentState: Boolean = false;
  validationForm: any;

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
    this.loadForm();
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

  loadForm() 
  {
    var indexAux = 0;
    this.listagroup = [];
    var constrolList = "{";
    this.movilListService.getMovilList(this.planService, this.key).subscribe(
      response => {
        this.numberList = response;
        //console.log(this.numberList);
        const linesMovil = this.numberList["data"]["data"]["movil"];
        const linesInternet = this.numberList["data"]["data"]["ifixed"];
        const linesEntertainment = this.numberList["data"]["data"]["tv"];
        console.log(linesMovil.length);
        
        /*
        validationForm = new FormGroup({
          'dni': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern(this.dniClientPattern)]),
          'name': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nameClient)]),
          'lastname': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(35), Validators.pattern(this.nameClient)]),
          'subscriberId': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8), Validators.pattern(this.mobilNumPattern)]),
          'captcha_status': new FormControl(null, [Validators.required])
        });
         */
        if (linesMovil.length > 0) {
          this.movilState = true;
          constrolList = constrolList+"'movil_control': new FormControl(null, [Validators.required]),";
          this.listagroup.push('movil_control');
          for (let index = indexAux; index < linesMovil.length; index++) {
            if (index == 0) {
              this.linesList.push({id: index.toString(), name: linesMovil[index], description: 'alert alert-info divOption'});  
            } else {
              this.linesList.push({id: index.toString(), name: linesMovil[index], description: 'alert alert-secondary divOption'});
            } 
            indexAux = indexAux + 1;
          }  
        }
        console.log(linesInternet);
        if (linesInternet.length > 0) {
          this.listagroup.push('internet_control');
          constrolList = constrolList+"'internet_control': new FormControl(null, [Validators.required]),";
          let indexAuxBase = indexAux;
          console.log(indexAuxBase);
          this.internetState = true;
          for (let index = 0; index < linesInternet.length; index++) {
            indexAuxBase = indexAuxBase + index;
            if (index == 0) {
              this.internetList.push({id: indexAuxBase.toString(), name: linesInternet[index], description: 'alert alert-info divOption'});  
            } else {
              this.internetList.push({id: indexAuxBase.toString(), name: linesInternet[index], description: 'alert alert-secondary divOption'});
            } 
            indexAux = indexAux + 1;
          }  
          console.log("internetdata");
          console.log(this.internetList);
        }

        console.log(linesEntertainment);
        if (linesEntertainment.length > 0) {
          this.listagroup.push('tv_control');
          constrolList = constrolList+"'tv_control': new FormControl(null, [Validators.required])";
          let indexAuxBase = indexAux;
          this.entertainmentState = true;
          for (let index = 0; index < linesEntertainment.length; index++) {
            indexAuxBase = indexAuxBase + index;
            console.log("internet "+index);
            if (index == indexAuxBase) {
              this.tvList.push({id: indexAuxBase.toString(), name: linesEntertainment[index], description: 'alert alert-info divOption'});  
            } else {
              this.tvList.push({id: indexAuxBase.toString(), name: linesEntertainment[index], description: 'alert alert-secondary divOption'});
            } 
            indexAux = indexAux + 1;
          }  
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

/*
  private 
  }*/

  get movil_control() {
    return this.validationForm.get('movil_control');
  }

  get internet_control() {
    return this.validationForm.get('internet_control');
  }

  get tv_control() {
    return this.validationForm.get('tv_control');
  }
}
