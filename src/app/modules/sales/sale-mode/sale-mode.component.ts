import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WebstoreService } from '@app/services/webstore/webstore.service';
import { RadioLines } from '@models/Radio-Lines';

@Component({
  selector: 'app-sale-mode',
  templateUrl: './sale-mode.component.html',
  styleUrls: ['./sale-mode.component.scss']
})
export class SaleModeComponent implements OnInit {
  entregaMode: RadioLines[] = [];
  constructor(private webstoreservice: WebstoreService) { }

  ngOnInit(): void {
  }

}
