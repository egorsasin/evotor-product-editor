import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";
import {
  tap,
  first,
  map,
  distinctUntilChanged,
  find,
  take
} from "rxjs/operators";

import { ApiService } from "./api.service";
import { Store } from "../models";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: "root"
})
export class StoresService {
  private storeSubject = new BehaviorSubject({} as Store);
  public store = this.storeSubject.asObservable().pipe(distinctUntilChanged());
  public currentStore: Store;

  private storesSubject = new ReplaySubject<Store[]>(1);
  public storesRx: Observable<Store[]> = this.storesSubject
    .asObservable()
    .pipe(take(1));
  public stores: Store[] = [];

  constructor(
    private apiService: ApiService,
    private tokenService: TokenService
  ) {}

  populate() {
    // if (this.tokenService.getToken()) {
    //   this.apiService
    //     .get("/stores/search")
    //     .subscribe(
    //       (data: Store[]) => this.setVars(data),
    //       err => this.purgeVars()
    //     );
    // } else {
    //   this.purgeVars();
    // }
  }

  private setVars(data: Store[]): void {
    if (data && data.length) {
      this.storesSubject.next(data);
      this.stores = data;
      var currentStore = data.find(
        store => this.currentStore.uuid === store.uuid
      );
      this.storeSubject.next(currentStore || data[0]);
    }
  }

  private purgeVars(): void {
    this.tokenService.destroyToken();
    this.storeSubject.next({} as Store);
    this.storesSubject.next([]);
  }

  public getStore(uuid: string): Observable<Store> {
    return this.apiService
      .get("/stores/4")
      .pipe(map(stores => stores.find(store => store.uuid === uuid)));
  }

  public getStores(): Observable<Store[]> {
    console.log("getStores");
    return this.apiService.get("/stores/search").pipe(
      tap(stores => {
        this.storesSubject.next(stores);
        this.stores = stores;
      })
    );
  }
}
