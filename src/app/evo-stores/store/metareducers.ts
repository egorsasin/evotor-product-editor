
import { StorageService } from 'src/app/shared';
import { Action, ActionReducer } from '@ngrx/store';

export function syncMetaReducer<S, A extends Action = Action>(
  storageService: StorageService
 ) {
  return function(reducer: ActionReducer<S, A>) {
 
    return function(state: S, action: A): S {
      const nextState = reducer(state, action);
      return nextState;  
    }
  };
 }