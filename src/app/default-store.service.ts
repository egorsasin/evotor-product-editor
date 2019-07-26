import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, Resolve } from "@angular/router";
import { StoresService, Store } from "./shared";
import { map } from "rxjs/operators";

@Injectable()
export class DefaultStoreResolver implements Resolve<any> {
  constructor(private storeService: StoresService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): boolean {
    const stores: Store[] = route.parent.data["stores"];

    this.storeService.storesRx
      .pipe(map((stores: Store[]) => this.router.navigate([stores[0].uuid])))
      .subscribe();
    return false;
  }
}
