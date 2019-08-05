import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import { environment } from '../../../environments/environment';
import * as fromEvotorStores from './evotor-stores/store';

export interface State {
  stores: fromEvotorStores.State,
}

export const reducers: ActionReducerMap<State> = {
  stores: fromEvotorStores.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getStoresState =  createFeatureSelector<fromEvotorStores.State>("stores");
export const getStores = createSelector(getStoresState, fromEvotorStores.getStores);
