import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";
import {
  tap,
  map,
  distinctUntilChanged,
  take
} from "rxjs/operators";

import { ApiService } from "../shared/services/api.service";
import { EvoStore } from "../shared/models";
import { StorageService } from "../shared/services/storage.service";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class EvoStoresService {

  private storeSubject = new BehaviorSubject({} as EvoStore);
  public store = this.storeSubject.asObservable().pipe(distinctUntilChanged());
  public currentStore: EvoStore;

  private storesSubject = new ReplaySubject<EvoStore[]>(1);
  public storesRx: Observable<EvoStore[]> = this.storesSubject
    .asObservable()
    .pipe(take(1));
  public stores: EvoStore[] = [];

  constructor(
    private apiService: ApiService,
    private tokenService: StorageService
  ) {}

  public getStores(): Observable<EvoStore[]> {

    return this.apiService.get("/stores")
      .pipe(
        map((data: { items: EvoStore[], paging: string }) => data.items),
      );
  }

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

  private setVars(data: EvoStore[]): void {
    if (data && data.length) {
      this.storesSubject.next(data);
      this.stores = data;
      var currentStore = data.find(
        store => this.currentStore.id === store.id
      );
      this.storeSubject.next(currentStore || data[0]);
    }
  }

  private purgeVars(): void {
    this.tokenService.destroyItem(environment.token_key);
    this.storeSubject.next({} as EvoStore);
    this.storesSubject.next([]);
  }

  public getStore(uuid: string): Observable<EvoStore> {
    return this.apiService
      .get("/stores/4")
      .pipe(map(stores => stores.find(store => store.uuid === uuid)));
  }


}
