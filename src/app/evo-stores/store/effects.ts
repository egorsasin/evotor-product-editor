import { Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, withLatestFrom, exhaustMap, filter } from 'rxjs/operators';

import { loadStores, initStores  } from './actions';
import { getStoresLoaded } from '../store';
import { EvoStoresService } from '../evo-stores.service';
import { StorageService } from 'src/app/shared';

const CURRENT_STORE_KEY = "evo-current-store";

@Injectable()
export class StoresEffects {

  constructor(
    private actions: Actions,
    private evoStoresService: EvoStoresService,
    private storageService: StorageService,
    private store: Store<any>,
  ) {}

  loadStores = createEffect(() => 
    this.actions.pipe(
      ofType(initStores.type),
      withLatestFrom(this.store.select(getStoresLoaded)),
      filter(([action, loaded]) => !loaded),
      exhaustMap(() => this.evoStoresService.getStores()
        .pipe(
          map(stores => {
            const currentStoreId: string = this.storageService.getItem(CURRENT_STORE_KEY); 
            const selected = currentStoreId && stores.find(store => store.id === currentStoreId) ? currentStoreId : null; 
            return loadStores({ stores, selected });
          }),
        )
      )
    )
  );
}

