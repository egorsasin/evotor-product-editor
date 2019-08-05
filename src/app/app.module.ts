import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { HttpTokenInterceptor } from "./shared";
import { AuthComponent } from "./auth/auth.component";
import { LayoutBaseComponent } from "./ui/layout-base/layout-base.component";
import { StoreSelectorComponent } from './store-selector/store-selector.component';
import { EvotorStoresModule } from './evotor-stores/evotor-stores.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, AuthComponent, LayoutBaseComponent, StoreSelectorComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EvotorStoresModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [ StoreSelectorComponent ]
})
export class AppModule {}
