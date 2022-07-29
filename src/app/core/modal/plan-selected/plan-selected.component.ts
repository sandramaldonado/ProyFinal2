import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioButton, MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plan-selected',
  templateUrl: './plan-selected.component.html',
  styleUrls: ['./plan-selected.component.scss']
})
export class PlanSelectedComponent implements OnInit {
  favoritePlans!: string;
  title = "Antes de continuar";
  description = "Debido a tu capacidad de endeudamiento, para continuar el proceso de compra por este canal deberás habilitar el pago automático de tu servicio de manera mensual mediante una tarjeta de débito o crédito que te pediremos antes de concluir tu compra. Es un proceso sencillo que te asegurará que puedas adquirir este plan.";
  
  
  constructor(private router: Router, 
              private route: ActivatedRoute,
              public dialogRef: MatDialogRef<PlanSelectedComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log("SMS data: ", this.data);
    this.dialogRef.disableClose = true;
  }

  cancelar() {
    this.dialogRef.close();
    window.location.href="https://www.viva.com.bo/";
  }

  continueProcess() {
    this.dialogRef.close();
    this.router.navigate([`client/adminClient`, this.data]);
  }

}
