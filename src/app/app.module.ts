import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HttpTokenInterceptor } from "./shared";
import { AuthComponent } from "./auth/auth.component";
import { StoresResolver } from "./stores-resolver.service";
import { StoreResolver } from "./store-resolver.service";
import { LayoutBaseComponent } from "./ui/layout-base/layout-base.component";
import { DefaultStoreResolver } from "./default-store.service";
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './shared/store';
import { StoreSelectorComponent } from './store-selector/store-selector.component';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';


@NgModule({
  declarations: [AppComponent, AuthComponent, LayoutBaseComponent, StoreSelectorComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
    StoresResolver,
    StoreResolver,
    DefaultStoreResolver,
  ],
  bootstrap: [AppComponent],
  entryComponents: [ StoreSelectorComponent ]
})
export class AppModule {}
