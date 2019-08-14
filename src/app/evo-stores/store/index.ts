import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EvoStoresState, adapter, getSelectedId } from './reducer';

import  * as fromRoot from '../../shared/store';

export interface State extends fromRoot.State {
  stores: EvoStoresState
}

// Selectors
export const getStoresState =  createFeatureSelector<State, EvoStoresState>("stores");

export const { selectAll, selectEntities } = adapter.getSelectors(getStoresState);

export const getStoresLoaded = createSelector(getStoresState, (state: EvoStoresState) => state.loaded);
export const getSelectedStoreId = createSelector(getStoresState, getSelectedId);

export const getSelectedStore = createSelector(
  selectEntities,
  getSelectedStoreId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);


