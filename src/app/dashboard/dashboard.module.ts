import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  DashboardRoutingModule,
  routingComponents
} from "./dashboard-routing.module";
import { SharedModule } from "../shared/shared.module";
import { GroupSelectorComponent } from "../group-selector/group-selector.component";
import { HeaderComponent } from "../ui/header/header.component";
import { ProductEditorComponent } from "../product-editor/product-editor.component";

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    routingComponents,
    GroupSelectorComponent,
    HeaderComponent,
    ProductEditorComponent
  ],
  entryComponents: [GroupSelectorComponent]
})
export class DashboardModule {}
