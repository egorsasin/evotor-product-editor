import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard.component";
import { SidebarComponent } from "../ui/sidebar/sidebar.component";
import { ProductResolver } from "../shared/resolvers";
import { ProductEditorComponent } from "../product-editor/product-editor.component";

export const routingComponents = [
  DashboardComponent,
  SidebarComponent,
  ProductEditorComponent
];

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "product",
        component: SidebarComponent
      },
      // {
      //   path: "product/:id",
      //   component: SidebarComponent,
      //   resolve: { product: ProductResolver }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProductResolver]
})
export class DashboardRoutingModule {}
