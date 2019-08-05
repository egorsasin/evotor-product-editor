import { Component, OnInit } from "@angular/core";
import { ProductsService, CacheService, StoresService } from "../../services";
import { EvotorStore, Product } from "../../models";
import { Observable } from "rxjs";
import { switchMap, mergeMap, tap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Product[];
  public parentUuid: string | null = null;

  private currentStore: EvotorStore;

  constructor(
    private storesService: StoresService,
    private productService: ProductsService,
    private cacheService: CacheService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.activatedRoute.data
    //   .pipe(
    //     tap(data => {
    //       this.currentStore = this.storesService.currentStore;
    //       this.cacheService.getRx(
    //         `null_${this.currentStore.uuid}`,
    //         this.productService.getProducts(null, true)
    //       );
    //     }),
    //     switchMap(data =>
    //       this.cacheService.getSubscription(`null_${this.currentStore.uuid}`)
    //     )
    //   )
    //   .subscribe((products: Product[]) => {
    //     this.products = products;
    //   });
  }

  trackByUuid(index: number, product: Product) {
    return product.uuid;
  }
}
