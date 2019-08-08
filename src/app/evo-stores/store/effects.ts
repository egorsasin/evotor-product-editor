import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, withLatestFrom, exhaustMap, filter } from 'rxjs/operators';


import { EvoStoresService } from '../../shared/services';

import { ActionTypes, loadStores  } from './actions';
import { getStoresLoaded } from '../store';

@Injectable()
export class StoresEffects {

  constructor(
    private actions: Actions,
    private storesService: EvoStoresService,
    private store: Store<any>,
  ) {}

  loadStores = createEffect(() => 
    this.actions.pipe(
      ofType(ActionTypes.INIT),
      withLatestFrom(this.store.select(getStoresLoaded)),
      filter(([action, loaded]) => !loaded),
      exhaustMap(() => this.storesService.getStores()
        .pipe(
          map(stores => {            
            return loadStores({ stores })
          }),
        )
      )
    )
  );

}

