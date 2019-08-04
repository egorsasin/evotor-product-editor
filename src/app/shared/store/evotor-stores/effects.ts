import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { AuthActionTypes } from 'src/app/auth/auth.actions';
import { StoresService } from '../../services';
import { mergeMap, map, catchError } from 'rxjs/operators';
import  * as EvotorStoresActions from './actions';
import { EMPTY } from 'rxjs';


@Injectable()
export class StoresEffects {

  constructor(
    private actions: Actions,
    private storesService: StoresService
  ) {}

  loadStores = createEffect(() => {
    this.actions.pipe(
      ofType(AuthActionTypes.INIT),
      mergeMap(() => this.storesService.getStores()
        .pipe(
          map(stores => EvotorStoresActions.loadStores({ stores })),
          catchError(() => EMPTY)
        )
      )
    )
  });
}

