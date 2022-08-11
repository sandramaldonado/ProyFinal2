import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebstoreService } from "@services/webstore/webstore.service";

@Component({
  selector: 'app-result-scoring',
  templateUrl: './result-scoring.component.html',
  styleUrls: ['./result-scoring.component.scss']
})
export class ResultScoringComponent implements OnInit {
  @Output() nextScoringStep = new EventEmitter<any>();
  WasInformed : boolean = false;
  constructor(
    private webstoreservice : WebstoreService
  ) { }

  ngOnInit(): void {
  }

  next(){
    this.webstoreservice.saveDataInSession("scoringResult",{scoringInformed:true});
    this.WasInformed = true;
    this.nextScoringStep.emit(true);
  }

}
