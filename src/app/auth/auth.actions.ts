import { createAction, props } from '@ngrx/store';

export enum AuthActionTypes {
  INIT = '[Auth] Init',
}

export const initAction = createAction(
  AuthActionTypes.INIT,
  props<{ token: string; }>(),
);
