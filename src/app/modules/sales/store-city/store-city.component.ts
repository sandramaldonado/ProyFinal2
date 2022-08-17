import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '@app/services/client.service';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { DocumentType } from '@models/DocumentType';
import { Console } from 'console';

@Component({
  selector: 'app-store-city',
  templateUrl: './store-city.component.html',
  styleUrls: ['./store-city.component.scss']
})
export class StoreCityComponent implements OnInit {
  cityList: DocumentType[] = [{value: 'CBEN', description: 'Beni'},
                              {value: 'CCBA', description: 'Cochabamba'},
                              {value: 'CLPZ', description: 'La Paz'},
                              {value: 'CORU', description: 'Oruro'},
                              {value: 'CPAN', description: 'Pando'},
                              {value: 'CPOT', description: 'Potosi'},
                              {value: 'CSCR', description: 'Sucre'},
                              {value: 'CSCZ', description: 'Santa Cruz'},
                              {value: 'CTRJ', description: 'Tarija'}];

  storesList: DocumentType[] = [];

  storeGroup: any = [{"CCBA": [{value: "Tienda 1", description: "Tienda 1"}, {value: "Tienda 2", description: "Tienda 2"}],
                      "CLPZ": [{value: "Tienda 3", description: "Tienda 3"}, {value: "Tienda 4", description: "Tienda 4"}],
                      "CBEN": [{value: "Tienda 5", description: "Tienda 5"}, {value: "Tienda 6", description: "Tienda 6"}],
                      "CORU": [{value: "Tienda 7", description: "Tienda 7"}, {value: "Tienda 8", description: "Tienda 8"}],
                      "CPAN": [{value: "Tienda 9", description: "Tienda 9"}, {value: "Tienda 10", description: "Tienda 10"}],
                      "CPOT": [{value: "Tienda 11", description: "Tienda 11"}, {value: "Tienda 12", description: "Tienda 12"}],
                      "CSCR": [{value: "Tienda 13", description: "Tienda 13"}, {value: "Tienda 14", description: "Tienda 14"}],
                      "CSCZ": [{value: "Tienda 15", description: "Tienda 15"}, {value: "Tienda 16", description: "Tienda 16"}],
                      "CTRJ": [{value: "Tienda 17", description: "Tienda 17"}, {value: "Tienda 18", description: "Tienda 18"}],
                    }];
  validationForm = new FormGroup({
    'store': new FormControl(null, [Validators.required]),
    'city': new FormControl(null, [Validators.required])
  });

  constructor() { }



  someMethod(value: any){
    console.log(value);
    //console.log(this.storeGroup);
    this.storesList = this.storeGroup[0][value];
  }

  get city() {
    return this.validationForm.get('city');
  }

  get store() {
    return this.validationForm.get('store');
  }
}
