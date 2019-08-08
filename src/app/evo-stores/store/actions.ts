import { createAction, props } from '@ngrx/store';
import { EvoStore } from '../../shared/models';

export enum ActionTypes { 
  SELECT = "[Stores] Select",
  LOAD = "[Stores] Load",
  INIT = "[Stores] Init",
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
  props<{ stores: EvoStore[]; }>(),
);
