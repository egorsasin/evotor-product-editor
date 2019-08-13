import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { StoresResolver } from '../shared/resolvers/';

export const routedComponents = [ LayoutComponent ];

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    resolve: { isLoaded: StoresResolver },
    children: [
      { 
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(module => module.DashboardModule),
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ StoresResolver ]
})
export class UiRoutingModule {}