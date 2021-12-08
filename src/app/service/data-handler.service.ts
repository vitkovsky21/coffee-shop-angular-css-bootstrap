import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../class/product';
import { TestData } from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  productsSubject = new BehaviorSubject<Product[]>(TestData.products)

  constructor() {}

  fillProducts() {
    this.productsSubject.next(TestData.products);
  }
}
