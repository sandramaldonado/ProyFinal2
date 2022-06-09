import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CartService } from "../../shared/services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products = this.cartService.getItems();
  listItems = this.cartService.getSize();
  constructor(private router: Router,
    private cartService : CartService) { }

  ngOnInit(): void {
    this.router.events.subscribe(event =>{
      if (event instanceof NavigationStart){
        console.log("load");
      }
   })
  }

}
