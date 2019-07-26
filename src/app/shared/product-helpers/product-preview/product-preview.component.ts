import {
  Component,
  OnInit,
  Input,
  ViewContainerRef,
  TemplateRef,
  ViewChild
} from "@angular/core";
import { Subscription } from "rxjs";

import { Product, Store } from "../../models";
import { CacheService, StoresService } from "../../services";
import { ProductEventService } from "../../services/product-event.service";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "[app-product-preview]",
  templateUrl: "./product-preview.component.html"
})
export class ProductPreviewComponent implements OnInit {
  @Input()
  product: Product;

  @Input()
  level: number = 0;

  @ViewChild("node")
  groupTemplate: TemplateRef<any>;

  public isExpanded: boolean = false;
  public products: Product[];
  private currentStore: Store;
  private subscribtion: Subscription;

  constructor(
    private cacheService: CacheService,
    private viewContainerRef: ViewContainerRef,
    private storesService: StoresService,
    private productEventService: ProductEventService
  ) {}

  ngOnInit() {
    this.currentStore = this.storesService.currentStore;
    this.viewContainerRef.createEmbeddedView(this.groupTemplate);
    this.subscribtion = this.cacheService
      .getSubscription(`${this.product.uuid}_${this.currentStore.uuid}`)
      .subscribe(products => {
        this.isExpanded = products !== undefined;
        if (products) {
          this.products = products;
        } else {
          this.products = [] as Product[];
        }
      });
  }

  toggleSell() {
    this.product.allowToSell = !this.product.allowToSell;
  }

  toggleExpand() {
    this.cacheService.expandCacheRecord(
      `${this.product.uuid}_${this.currentStore.uuid}`,
      this.product
    );
  }

  trackByUuid(index: number, product: Product) {
    return `${product.uuid}`;
  }

  ngOnDestroy() {
    if (this.subscribtion) {
      this.subscribtion.unsubscribe();
    }
  }

  editProduct(product) {
    this.productEventService.selectProduct(product);
  }
}
