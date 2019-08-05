import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  Resolve
} from "@angular/router";
import { catchError, map } from "rxjs/operators";
import { StoresService, EvotorStore } from "./shared";
import { Observable, empty } from "rxjs";

@Injectable()
export class StoresResolver implements Resolve<EvotorStore[]> {
  constructor(private storeService: StoresService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EvotorStore[]> {
    return this.storeService.getStores().pipe(
      catchError(err => {
        this.router.navigateByUrl("/");
        return empty();
      })
    );
  }
}
