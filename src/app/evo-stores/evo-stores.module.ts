import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducer } from './store';
import { StoresEffects } from './store/effects';
import { StoresResolver } from './resolvers/stores-resolver.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('stores', reducer,),
    EffectsModule.forFeature([ StoresEffects ])
  ],
  providers: [ StoresResolver ]
})
export class EvoStoresModule { }
