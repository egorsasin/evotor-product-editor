import { createAction, props } from '@ngrx/store';

export enum Actions { 
  SELECT = "[Stores] Select"
}

export const selectStore = createAction(
  Actions.SELECT,
  props<{ id: string; }>(),
);
