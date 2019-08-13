import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { tap, filter, first, mapTo } from "rxjs/operators";

import { Observable, of } from "rxjs";
import { getStoresLoaded } from '../../evo-stores/store';
import { initStores } from '../../evo-stores/store/actions';


@Injectable()
export class StoresResolver implements Resolve<boolean> {
  constructor(
    private store: Store<any>
  ) {}

  resolve(): Observable<boolean> {
    
    return this.store.pipe(
      select(getStoresLoaded),
      tap(loaded => {
        if (!loaded) this.store.dispatch(initStores());
      }),
      filter(loaded => loaded),
      first()
    );
  }
}
