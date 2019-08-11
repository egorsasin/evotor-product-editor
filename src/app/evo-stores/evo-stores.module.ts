import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, META_REDUCERS, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store';
import { StoresEffects } from './store/effects';
import { StoresResolver } from './resolvers/stores-resolver.service';
import { StorageService } from '../shared';
import { syncMetaReducer } from './store/metareducers';

export const CURRENT_STORE_KEY = new InjectionToken<string[]>('currentStore');

export function getMetaReducers(
  storageService: StorageService,
  currentStoreKey: string
): MetaReducer<any>[] {
  return [ syncMetaReducer(storageService) ]
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('stores', reducer,),
    EffectsModule.forFeature([ StoresEffects ])
  ],
  providers: [ 
    StoresResolver,
    { provide: CURRENT_STORE_KEY, useValue: 'evo-current-store'},
    { provide: META_REDUCERS, deps: [ CURRENT_STORE_KEY, StorageService ], useFactory: getMetaReducers }
  ]
})
export class EvoStoresModule { }
