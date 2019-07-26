import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { StoresService, Store } from "./shared";
import { Observable, empty } from "rxjs";

@Injectable()
export class StoresResolver implements Resolve<Store[]> {
  constructor(private storeService: StoresService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Store[]> {
    return this.storeService.getStores().pipe(
      catchError(err => {
        this.router.navigateByUrl("/");
        return empty();
      })
    );
  }
}
