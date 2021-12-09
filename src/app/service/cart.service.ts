import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList: any = [];
  public itemList = new BehaviorSubject<any>([]);

  constructor() { }

  getItems(){
      return this.itemList.asObservable();
  }

  setItem(item: any) {
      this.cartItemList.push(...item);
      this.itemList.next(item);
  }

  addtoCart(item: any) {
      this.cartItemList.push(item);
      this.itemList.next(this.cartItemList);
      this.getTotalPrice();
  }

  getTotalPrice(): number {
      let grandTotal = 0;
      this.cartItemList.map((a: any) => {
          grandTotal += a.price;
      })
      return grandTotal;
  }
  
  removeCartItem(item: any) {
      this.cartItemList.map((a: any, index: any) => {
          if (item.id === a.id) {
              this.cartItemList.splice(index, 1)
          }
      })
      this.itemList.next(this.cartItemList)
    }

  removeAllCart() {
      this.cartItemList = []
      this.itemList.next(this.cartItemList)
  }
}

