import { createAction, props } from '@ngrx/store';
import { EvotorStore } from '../../models';

export enum Actions { 
  SELECT = "[Stores] Select",
  LOADING_SUCCESS = "[Stores] Loading Sucess"
}

export const selectStore = createAction(
  Actions.SELECT,
  props<{ id: string; }>(),
);

export const loadStores = createAction(
  Actions.LOADING_SUCCESS,
  props<{ stores: EvotorStore[]; }>(),
);
