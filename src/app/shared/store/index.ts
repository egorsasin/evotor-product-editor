import {
  MetaReducer,
} from '@ngrx/store';

import { environment } from '../../../environments/environment';

export interface State { }

//export const reducers: ActionReducerMap<State> = {
  //stores: fromEvotorStores.reducer,
//};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
