import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, Resolve } from "@angular/router";
import { StoresService, EvotorStore } from "./shared";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";

@Injectable()
export class StoreResolver implements Resolve<EvotorStore> {
  constructor(private storeService: StoresService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<EvotorStore> {
    const storeUuid: string = route.params["store"];
    return this.storeService.storesRx.pipe(
      map((stores: EvotorStore[]) => stores.find(store => store.uuid == storeUuid)),
      tap((store: EvotorStore) => (this.storeService.currentStore = store))
    );
  }
}
