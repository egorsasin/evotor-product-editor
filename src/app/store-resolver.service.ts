import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, Resolve } from "@angular/router";
import { StoresService, Store } from "./shared";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable()
export class StoreResolver implements Resolve<Store> {
  constructor(private storeService: StoresService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Store> {
    const storeUuid: string = route.params["store"];
    return this.storeService.storesRx.pipe(
      map((stores: Store[]) => stores.find(store => store.uuid == storeUuid)),
      tap((store: Store) => (this.storeService.currentStore = store))
    );
  }
}
