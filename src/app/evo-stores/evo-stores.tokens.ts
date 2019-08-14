import { InjectionToken } from '@angular/core';
import { StoreConfig } from '@ngrx/store/src/store_module';
import { EvoStoresState } from './store/reducer';

export const CURRENT_STORE_KEY = new InjectionToken<string[]>('Evo Current Store');

export const EVO_STORES_CONFIG_TOKEN = new InjectionToken<StoreConfig<EvoStoresState>>('Evo Stores Config Token');