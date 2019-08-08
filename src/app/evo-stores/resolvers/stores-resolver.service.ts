import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Store, select } from '@ngrx/store';
import { tap, filter, first } from "rxjs/operators";

import { Observable } from "rxjs";
import { getStoresLoaded } from '../store';
import { initStores } from '../store/actions';


@Injectable()
export class StoresResolver implements Resolve<boolean> {
  constructor(
    private store: Store<any>
  ) {}

  resolve(): Observable<boolean> {
    return this.store.pipe(
      select(getStoresLoaded),
      tap(() =>
        this.store.dispatch(initStores())
      ),
      filter(loaded => loaded),
      first()
    );
  }
}
