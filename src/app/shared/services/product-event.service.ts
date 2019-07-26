import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";

import { Product } from "../models";

@Injectable({
  providedIn: "root"
})
export class ProductEventService {
  private product: BehaviorSubject<Product> = new BehaviorSubject<Product>(
    null
  );
  public selectedProduct: Observable<
    Product
  > = this.product.asObservable().pipe(filter(product => !!product));

  constructor() {}

  selectProduct(product: Product) {
    this.product.next(product);
  }
}
