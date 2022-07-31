import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CartService } from "@services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {
  totalItems$ : Observable<number> ;

  constructor(private router : Router,
    private cartService : CartService) {
      this.totalItems$ = this.cartService.getSize();
     }

  ngOnInit(): void {
    this.totalItems$ = this.cartService.getSize();

  }

}
