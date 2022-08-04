import { Component, OnInit } from '@angular/core';
import { MovilListService } from '@app/services/movil-list.service';


@Component({
  selector: 'app-movil-list',
  templateUrl: './movil-list.component.html',
  styleUrls: ['./movil-list.component.scss']
})
export class MovilListComponent implements OnInit {
  key: any;
  numberList: any;
  title = "Elije tu Número";
  message = "Te damos algunas opciones de líneas telefónicas para que puedas tener tu nuevo plan con un número telefónico que te agrade.";
  
  constructor(movilListService: MovilListService) { }

  ngOnInit(): void {
    const planService = this.armadoJsonScoring();
  }

  armadoJsonScoring(){

  }
}
