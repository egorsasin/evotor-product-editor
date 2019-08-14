import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store/reducer';
import { StoresEffects } from './store/effects';
import { StorageService } from '../shared';
import { syncMetaReducer } from './store/metareducers';
import { CURRENT_STORE_KEY, EVO_STORES_CONFIG_TOKEN } from './evo-stores.tokens';
import { StoreSelectorComponent } from './components/store-selector.component';


export function getConfig(  
  currentStoreKey: string,
  storageService: StorageService,
) {
  return { metaReducers: [ syncMetaReducer(currentStoreKey, storageService) ]}
}

@NgModule({
  declarations: [
    StoreSelectorComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('stores', reducer, EVO_STORES_CONFIG_TOKEN),
    EffectsModule.forFeature([ StoresEffects ])
  ],
  providers: [ 
    { provide: CURRENT_STORE_KEY, useValue: 'evo-current-store'},
    { provide: EVO_STORES_CONFIG_TOKEN, deps: [ CURRENT_STORE_KEY, StorageService ], useFactory: getConfig }
  ],
  entryComponents: [
    StoreSelectorComponent
  ]
})
export class EvoStoresModule { }
