import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { ProductsService } from "..";
import { catchError, map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Product } from "../models";

@Injectable()
export class ProductResolver {
  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  // resolve(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): Observable<any> {
  //   return this.productService
  //     .getProduct(route.params["id"])
  //     .pipe(catchError(err => this.router.navigateByUrl("/")));
  // }
}
