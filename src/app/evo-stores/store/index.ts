import { EvoStore } from '../../shared/models';
import { createReducer, on, Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import  * as EvotorStoresActions from './actions';
import  * as fromRoot from '../../shared/store';

export interface EvoStoresState extends EntityState<EvoStore> {
  selected: string | null,
  loaded: boolean,
}

export interface State extends fromRoot.State {
  stores: EvoStoresState
}
export const adapter: EntityAdapter<EvoStore> = createEntityAdapter<EvoStore>();

export const initialState: EvoStoresState = adapter.getInitialState({
  selected: null,
  loaded: false,
});

const storesReducer = createReducer (
  initialState,
  on(EvotorStoresActions.selectStore, (state, { id }) => 
    ({ ...state, selected: id })
  ),
  on(EvotorStoresActions.loadStores, (state, { stores }) => {
    return adapter.addMany(stores, { ...state, loaded: true });
  }),
);

export function reducer(state: EvoStoresState | undefined, action: Action) {
  return storesReducer(state, action);
}

const { selectAll } = adapter.getSelectors();
export const getEvoStores = selectAll;

export const getStoresState =  createFeatureSelector<State, EvoStoresState>("stores");

export const getStoresLoaded = createSelector(
  getStoresState,
  (state: EvoStoresState) => state.loaded
);

export const getStores = createSelector(
  getStoresState,
  getEvoStores
);
