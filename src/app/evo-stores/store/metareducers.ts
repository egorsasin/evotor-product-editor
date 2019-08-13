
import { StorageService } from 'src/app/shared';
import { Action, ActionReducer } from '@ngrx/store';

import { loadStores } from './actions';

export function syncMetaReducer<S, A extends Action = Action>(
  currentStoreKey: string,
  storageService: StorageService
 ) {
  return function(reducer: ActionReducer<S, A>) {
 
    return function(state: S, action: A) {
      let reducedState = reducer(state, action);
      if (action.type === loadStores.type) {        
        const storeId = storageService.getItem(currentStoreKey);
      }
      return reducedState;  
    }
  };
 }