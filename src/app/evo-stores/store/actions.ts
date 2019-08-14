import { createAction, props, union } from '@ngrx/store';
import { EvoStore } from '../../shared/models';

export enum ActionTypes {   
  LOAD = "[Stores] Load",
  INIT = "[Stores] Init",
  SELECT = "[Stores] Set Selected Store",
}

export const initStores = createAction(
  ActionTypes.INIT,
);

export const selectStore = createAction(
  ActionTypes.SELECT,
  props<{ id: string; }>(),
);

export const loadStores = createAction(
  ActionTypes.LOAD,
  props<{ stores: EvoStore[], selected: string }>(),
);

const actionTypes = union({ initStores, selectStore, loadStores });
export type EvoStoresActionsUnion = typeof actionTypes;