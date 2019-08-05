// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, Router, Resolve } from "@angular/router";
// import { StoresService, EvotorStore } from "./shared";
// import { map } from "rxjs/operators";

// @Injectable()
// export class DefaultStoreResolver implements Resolve<any> {
//   constructor(private storeService: StoresService, private router: Router) {}

//   resolve(route: ActivatedRouteSnapshot): boolean {
//     const stores: EvotorStore[] = route.parent.data["stores"];

//     this.storeService.storesRx
//       .pipe(map((stores: EvotorStore[]) => this.router.navigate([stores[0].id])))
//       .subscribe();
//     return false;
//   }
// }
