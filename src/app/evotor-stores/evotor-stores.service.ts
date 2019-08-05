import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, ReplaySubject } from "rxjs";
import {
  tap,
  map,
  distinctUntilChanged,
  take
} from "rxjs/operators";

import { ApiService } from "../shared/services/api.service";
import { EvotorStore } from "../shared/models";
import { StorageService } from "../shared/services/storage.service";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class StoresService {

  private storeSubject = new BehaviorSubject({} as EvotorStore);
  public store = this.storeSubject.asObservable().pipe(distinctUntilChanged());
  public currentStore: EvotorStore;

  private storesSubject = new ReplaySubject<EvotorStore[]>(1);
  public storesRx: Observable<EvotorStore[]> = this.storesSubject
    .asObservable()
    .pipe(take(1));
  public stores: EvotorStore[] = [];

  constructor(
    private apiService: ApiService,
    private tokenService: StorageService
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

  private setVars(data: EvotorStore[]): void {
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
    this.storeSubject.next({} as EvotorStore);
    this.storesSubject.next([]);
  }

  public getStore(uuid: string): Observable<EvotorStore> {
    return this.apiService
      .get("/stores/4")
      .pipe(map(stores => stores.find(store => store.uuid === uuid)));
  }

  public getStores(): Observable<EvotorStore[]> {

    return this.apiService.get("/stores").pipe(map((data: { items: EvotorStore[], paging: string }) => data.items),
      tap(stores => {
        this.storesSubject.next(stores);
        this.stores = stores;
      })
    );
  }
}
