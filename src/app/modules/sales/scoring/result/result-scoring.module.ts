import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultScoringRoutingModule } from './result-scoring-routing.module';
import { ResultScoringComponent } from './result-scoring.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ResultScoringComponent
  ],
  imports: [
    CommonModule,
    ResultScoringRoutingModule,
    SharedModule
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  exports : [ResultScoringComponent]

})
export class ResultScoringModule { }
