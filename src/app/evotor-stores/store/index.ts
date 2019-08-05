import { EvotorStore } from '../../shared/models';
import { createReducer, on, Action, MetaReducer, ActionReducer } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import  * as EvotorStoresActions from './actions';

export interface State extends EntityState<EvotorStore> {
  selected: string | null,
}

export const adapter: EntityAdapter<EvotorStore> = createEntityAdapter<EvotorStore>();

export const initialState: State = adapter.getInitialState({
  selected: null,
});

const storesReducer = createReducer (
  initialState,
  on(EvotorStoresActions.selectStore, (state, { id }) => 
    ({ ...state, selected: id })
  ),
  on(EvotorStoresActions.loadStores, (state, { stores }) => 
    adapter.addMany(stores, state)
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return storesReducer(state, action);
}

const { selectAll } = adapter.getSelectors();
export const getStores = selectAll;
