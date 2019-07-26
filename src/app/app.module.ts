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


@NgModule({
  declarations: [AppComponent, AuthComponent, LayoutBaseComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
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
  bootstrap: [AppComponent]
})
export class AppModule {}
