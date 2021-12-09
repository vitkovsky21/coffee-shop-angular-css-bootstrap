import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  toggleMenu = false;
  toggleSearch = false;

  constructor(public cart: CartService) { }

  ngOnInit(): void {
  }

  openToggleMenu() {
    this.toggleMenu = !this.toggleMenu;
    this.toggleSearch = false;
  }  

  openToggleSearch() {
    this.toggleMenu = false;
    this.toggleSearch = !this.toggleSearch;
  }

  closeToggle() {
    this.toggleMenu = false;
    this.toggleSearch = false;
  }

}
