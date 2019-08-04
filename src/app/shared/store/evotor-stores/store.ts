import { EvotorStore } from '../../models';
import { createReducer, on, Action } from '@ngrx/store';
import  * as EvotorStoresActions from './actions';

export interface State {
  stores: EvotorStore[],
  selected: string,
}

export const initialState: State = {
  stores: [],
  selected: null,
}

const storesReducer = createReducer (
  initialState,
  on(EvotorStoresActions.selectStore, (state, { id }) => ({ ...state, selected: id })),
);

export function reducer(state: State | undefined, action: Action) {
  return storesReducer(state, action);
}

export const getStores = (state: State) => state.stores;