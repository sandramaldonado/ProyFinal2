import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-scoring',
  templateUrl: './result-scoring.component.html',
  styleUrls: ['./result-scoring.component.scss']
})
export class ResultScoringComponent implements OnInit {
  @Output() nextScoringStep = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  next(){
    this.nextScoringStep.emit(true);
  }

}
