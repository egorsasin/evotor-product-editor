import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { StoresResolver } from "./evo-stores/resolvers/stores-resolver.service";
import { LayoutBaseComponent } from "./ui/layout-base/layout-base.component";

const routes: Routes = [
  {
    path: "app/:token",
    component: AuthComponent
  },
  {
    path: "",
    resolve: { loaded: StoresResolver },
    children: [
      {
        path: "dashboard",
        loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule),
      },
      {
      path: "**",
      redirectTo: '/dashboard',
      //  pathMatch: "full",
      //  component: LayoutBaseComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
