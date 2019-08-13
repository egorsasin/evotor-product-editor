import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { routedComponents, UiRoutingModule } from './ui.routing-module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [ CommonModule, UiRoutingModule ],
  exports: [],
  declarations: [ 
    routedComponents, 
    HeaderComponent,
    SidebarComponent
  ]
})
export class UiModule {}
