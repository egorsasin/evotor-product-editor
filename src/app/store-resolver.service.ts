import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, Resolve } from "@angular/router";
import { EvoStoresService, EvoStore } from "./shared";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable()
export class StoreResolver implements Resolve<EvoStore> {
  constructor(private storeService: EvoStoresService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<EvoStore> {
    const storeUuid: string = route.params["store"];
    return this.storeService.storesRx.pipe(
      map((stores: EvoStore[]) => stores.find(store => store.id == storeUuid)),
      tap((store: EvoStore) => (this.storeService.currentStore = store))
    );
  }
}
