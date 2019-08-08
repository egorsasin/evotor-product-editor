import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject } from "rxjs";
import { Product } from "../models";
import { ProductsService } from "./products.service";
import { EvoStoresService } from "../../evo-stores/evo-stores.service";

interface CacheContent {
  value: any;
  expiry: number;
  expanded: boolean;
}

@Injectable({
  providedIn: "root"
})
export class CacheService {
  readonly DEFAULT_CACHE_AGE: number = 300000;

  private cache: Map<string, CacheContent> = new Map<string, CacheContent>();
  private inFlightObservables: Map<string, Subject<any>> = new Map<
    string,
    Subject<any>
  >();

  constructor(
    private productsService: ProductsService,
    private storesService: EvoStoresService
  ) {}

  getSubscription(key: string): Observable<Product[]> {
    if (!this.inFlightObservables.has(key)) {
      this.inFlightObservables.set(key, new BehaviorSubject(undefined));
    }
    return this.inFlightObservables.get(key).asObservable();
  }

  getRx(key: string, fallBack: Observable<any>, maxAge?: number): void {
    if (this.cache.has(key)) {
      this.notifyInFlightObservables(key, this.cache.get(key).value);
    } else {
      fallBack.subscribe(value => this.setRx(key, value, false, maxAge));
    }
  }

  deleteCacheValue(key: string, value: Product) {
    if (this.cache.has(key)) {
      const cachedValue = this.cache
        .get(key)
        .value.filter(product => product.uuid !== value.uuid);
      this.setRx(key, cachedValue);
    }
  }

  updateCacheValue(key: string, value: Product) {
    if (this.cache.has(key)) {
      const cachedValue = this.cache.get(key).value;
      const foundIndex = cachedValue.findIndex(
        product => product.uuid == value.uuid
      );
      if (foundIndex >= 0) {
        cachedValue[foundIndex] = value;
      } else {
        cachedValue.push(value);
      }
      this.setRx(key, cachedValue);
    }
  }

  setRx(
    key: string,
    value: any,
    expanded: boolean = false,
    maxAge: number = this.DEFAULT_CACHE_AGE
  ) {
    this.cache.set(key, {
      value,
      expanded,
      expiry: Date.now() + maxAge
    });
    this.notifyInFlightObservables(key, value);
  }

  private notifyInFlightObservables(key: string, value: any) {
    if (this.inFlightObservables.has(key)) {
      const inFlightObservable = this.inFlightObservables.get(key);
      if (inFlightObservable.observers.length) {
        inFlightObservable.next(value);
      }
    }
  }

  expandCacheRecord(key: string, record: Product): void {
    if (this.cache.has(key)) {
      const cachedValue = this.cache.get(key);

      if (!cachedValue.expanded) {
        this.notifyInFlightObservables(key, undefined);
      } else {
        this.notifyInFlightObservables(key, cachedValue.value);
      }

      this.cache.set(key, {
        value: cachedValue.value,
        expanded: !cachedValue.expanded,
        expiry: cachedValue.expiry
      });
    } else {
      this.productsService
        .getProducts(record.uuid)
        .subscribe((value: Product[]) => {
          this.setRx(key, value);
        });
    }
  }
}
