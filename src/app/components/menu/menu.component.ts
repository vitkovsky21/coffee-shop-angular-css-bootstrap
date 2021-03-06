import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/class/product';
import { CartService } from 'src/app/service/cart.service';
import { DataHandlerService } from 'src/app/service/data-handler.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products: Product[] = [];

  constructor(private cartService: CartService, private route: ActivatedRoute, private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.productsSubject.subscribe(products => this.products = products);
  }

  addItemToCart(product: any) {
    this.cartService.addtoCart(product);
  }

}
