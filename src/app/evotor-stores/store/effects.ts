import { Injectable } from "@angular/core";
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { AuthActionTypes } from 'src/app/auth/auth.actions';

import { environment } from '../../../environments/environment';
import { StoresService, StorageService } from '../../shared/services';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import  * as EvotorStoresActions from './actions';

@Injectable()
export class StoresEffects {

  constructor(
    private actions: Actions,
    private storesService: StoresService,
    private router: Router,
    private storageService: StorageService
  ) {}

  loadStores = createEffect(() => 
    this.actions.pipe(
      ofType(AuthActionTypes.INIT),
      tap((action: { token: string }) => { 
        this.storageService.setItem(environment.token_key, action.token) 
      }),
      mergeMap(() => this.storesService.getStores()
        .pipe(
          map(stores => {            
            this.router.navigate(['/dashboard']);
            return EvotorStoresActions.loadStores({ stores })
          }),
          catchError(() => { return EMPTY })
        )
      )
    )
  );

}

