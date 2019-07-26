import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductListComponent } from "./product-helpers";
import { AppFeatherIconsModule, AppNgBootstrapModule } from "./modules";
import { NgSelectModule } from "@ng-select/ng-select";
import { ProductPreviewComponent } from "./product-helpers/product-preview/product-preview.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppFeatherIconsModule,
    AppNgBootstrapModule,
    NgSelectModule
  ],
  exports: [
    AppFeatherIconsModule,
    ProductListComponent,
    AppNgBootstrapModule,
    NgSelectModule
  ],
  declarations: [ProductListComponent, ProductPreviewComponent]
})
export class SharedModule {}
