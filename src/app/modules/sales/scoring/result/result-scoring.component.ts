import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebstoreService } from "@services/webstore/webstore.service";

@Component({
  selector: 'app-result-scoring',
  templateUrl: './result-scoring.component.html',
  styleUrls: ['./result-scoring.component.scss']
})
export class ResultScoringComponent implements OnInit {
  @Output() nextScoringStep = new EventEmitter<any>();
  acceptRecurrentPayment : boolean = false;
  constructor(
    private webstoreservice : WebstoreService
  ) { }

  ngOnInit(): void{
    console.log("init scoring");
  }


  next(){
    this.webstoreservice.saveDataInSession("scoring",{acceptRecurrentPayment:true});
    this.acceptRecurrentPayment = true;
    this.nextScoringStep.emit(true);
  }

}
