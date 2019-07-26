import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FooterComponent } from "./footer/footer.component";
import { LayoutBaseComponent } from "./layout-base/layout-base.component";
import { LayoutComponent } from "./layout/layout.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [],
  declarations: [LayoutBaseComponent, LayoutComponent, FooterComponent, SidebarComponent]
})
export class UiModule {}
