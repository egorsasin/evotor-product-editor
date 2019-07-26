import { NgModule } from "@angular/core";
import { NgbDropdownModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [NgbDropdownModule, NgbModalModule],
  exports: [NgbDropdownModule, NgbModalModule],
  declarations: []
})
export class AppNgBootstrapModule {}
