import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  IconPlusCircle,
  IconChevronDown,
  IconChevronUp,
  IconEdit3,
  IconFolder
} from "angular-feather";

@NgModule({
  imports: [
    CommonModule,
    IconPlusCircle,
    IconChevronDown,
    IconChevronUp,
    IconEdit3,
    IconFolder
  ],
  exports: [
    IconPlusCircle,
    IconChevronDown,
    IconEdit3,
    IconChevronUp,
    IconFolder
  ],
  declarations: []
})
export class AppFeatherIconsModule {}
