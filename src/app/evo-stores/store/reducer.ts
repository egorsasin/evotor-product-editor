import { EvoStore } from '../../shared/models';
import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import  * as EvoStoresActions from './actions';

export interface EvoStoresState extends EntityState<EvoStore> {
  selected: string | null,
  loaded: boolean,
}

export const adapter: EntityAdapter<EvoStore> = createEntityAdapter<EvoStore>({
  selectId: (store: EvoStore) => store.id
});

export const initialState: EvoStoresState = adapter.getInitialState({
  selected: null,
  loaded: false,
});

const storesReducer = createReducer (
  initialState,
  on(EvoStoresActions.selectStore, (state, { id }) => 
    ({ ...state, selected: id })
  ),
  on(EvoStoresActions.loadStores, (state, { stores, selected }) => {
    return adapter.addMany(stores, { ...state, selected, loaded: true });
  }),
);

export function reducer(state: EvoStoresState | undefined, action: Action) {
  return storesReducer(state, action);
}

export const getSelectedId = (state: EvoStoresState) => state.selected;