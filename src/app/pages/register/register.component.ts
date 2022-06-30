import { Component, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../../shared/services/validation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Input() clientDetail = {id: 0, dni: '', subscriberId: '', name: '', email: ''};

  clientList: any;
  validations: any;

  public gropuForm = new FormGroup({
    nameComplete: new FormControl(''),
    dniNumber: new FormControl(''),
    phoneNumber: new FormControl(''),
    email: new FormControl('')
  });
  ident: any;

  constructor(private dialog: MatDialog, 
    private validationService: ValidationService, 
    private rutaActiva: ActivatedRoute,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  
  validationNumbers(number: string) {
    var valoresAceptados = /^[0-9]+$/; 
    var state = false;
    if (number.match(valoresAceptados) && number.length == 8) {
      state = true;
    }
    return state;
  }

  addClient(dataClient: any) {
    var ident:number = 0;
    
    this.validationService.getClientList()
      .subscribe(
        response => {
          this.clientDetail["id"] = response.length + 1;
        },
        error => {
          console.log(error);
        });    
    //this.saveForm(this.clientDetail);
    this.validationService.setClient(this.clientDetail).subscribe((data: {}) => {
      this.router.navigate(['/oferta']);
    });
  }
}
