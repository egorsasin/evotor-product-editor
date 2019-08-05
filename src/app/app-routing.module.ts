import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { StoreResolver } from "./store-resolver.service";
import { StoresResolver } from "./stores-resolver.service";
import { DefaultStoreResolver } from "./default-store.service";
import { LayoutBaseComponent } from "./ui/layout-base/layout-base.component";

const routes: Routes = [
  {
    path: "app/:token",
    component: AuthComponent
  },
  {
    path: "",
    //resolve: { stores: StoresResolver },
    children: [
      {
        path: ":store",
        loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule),
        //resolve: { store: StoreResolver }
      },
      {
        path: "",
        pathMatch: "full",
        component: LayoutBaseComponent,
        //resolve: { DefaultStoreResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
