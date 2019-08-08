import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiService } from "./api.service";
import { Product } from "../models";
import { EvoStoresService } from "../../evo-stores/evo-stores.service";
import { map, tap, filter, find } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(
    private apiService: ApiService,
    private storesService: EvoStoresService
  ) {}

  saveProduct(product: Product): Observable<any> {
    const products = new Array();
    products.push(product);
    return this.saveProducts(products);
  }

  saveProducts(products: Product[]): Observable<any> {
    const currentStore = this.storesService.currentStore;
    return this.apiService.post(
      `/stores/${currentStore.id}/products`,
      products
    );
  }

  public getProducts(
    parentUuid: string = null,
    onlyFolders = false
  ): Observable<Product[]> {
    const currentStore = this.storesService.currentStore;
    return this.apiService.get(`/stores/${currentStore.id}/products`).pipe(
      map((products: Product[]) =>
        products
          .filter((product: Product) => product.parentUuid === parentUuid)
          .map((product: Product) => {
            product.store = currentStore;
            return product;
          })
      )
    );
  }

  public getSiblings(
    uuid: string = null,
    onlyFolders = false
  ): Observable<Product[]> {
    const currentStore = this.storesService.currentStore;
    return this.apiService.get(`/stores/${currentStore.id}/products`).pipe(
      map((products: Product[]) => {
        const currentProduct = products.find(
          (product: Product) => product.uuid === uuid
        );
        return products.filter(
          (product: Product) =>
            (currentProduct
              ? product.parentUuid === currentProduct.parentUuid
              : false) && (onlyFolders ? product.group : true)
        );
      })
    );
  }

  public getProductWithChildren(uuid: string): Observable<Product[]> {
    return this.apiService
      .get(`/stores/${this.storesService.currentStore.id}/products`)
      .pipe(
        map((products: Product[]) => {
          return products.filter(
            product =>
              (product.uuid === uuid || product.parentUuid == uuid) &&
              product.group
          );
        })
      );
  }

  public getProduct(uuid: string): Observable<Product> {
    return this.apiService
      .get(`/stores/${this.storesService.currentStore.id}/products`)
      .pipe(
        map((products: Product[]) => {
          const currrentProduct = products.find(
            product => product.uuid == uuid
          );
          currrentProduct.parent = products.find(
            product => product.uuid == currrentProduct.parentUuid
          );
          return currrentProduct;
        })
      );
    //   map((products: Product[]) => {
    //     const product: Product = products.find(
    //       (product: Product) => product.uuid === uuid
    //     );
    // if (product && product.parentUuid) {
    //   product.parentProduct = products.find(
    //     (parent: Product) => parent.uuid === product.parentUuid
    //   );
    // }
    //   return product;
    // }),
    // product => {
    //   console.log(
    //     "Current store for product: " + this.storesService.currentStore.uuid
    //   );
    //   return product;
    // }
  }
}
