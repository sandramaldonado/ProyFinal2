import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-almost-done',
  templateUrl: './almost-done.component.html',
  styleUrls: ['./almost-done.component.scss']
})
export class AlmostDoneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  detalle(){
    console.log('asda');
    this.router.navigate(['/','detalle-compra']);
  }

}
