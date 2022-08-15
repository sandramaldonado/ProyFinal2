import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { WebstoreService } from '@app/services/webstore/webstore.service';

@Component({
  selector: 'app-delivery-method',
  templateUrl: './delivery-method.component.html',
  styleUrls: ['./delivery-method.component.scss']
})
export class DeliveryMethodComponent implements OnInit {
  title = "¿Cómo prefieres recibir tus equipos?";
  message = "El servicio contratado tiene artículos que debemos entregarte.";
  listOfOptions = [
      {value:"store",design:"storefront",style:"background-color: #d3a1f9; color: white; border: 4px solid #5C339D; border-radius:12px;",name:"Recoja en Tienda",id:"1",checked:true}
      //{value:"delivery",design:"delivery_dining",style:"background-color:#5C339D; color: white;border: 4px solid #5C339D; border-radius:12px;",name:"Delivery",id:"2",checked:true}
      ];

  validationForm = new FormGroup({
    'entregaData': new FormControl('', [Validators.required])
  });

  constructor(private webstoreservice: WebstoreService,
            private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  radioChange(event: MatRadioChange) {
    if (event.source.value === 'store') {
        console.log(event.source.value);
    } else {
      alert("Servicio no disponible Temporalmente");
    }
  }

  get forma() {
    return this.validationForm.get('forma');
  }

}
