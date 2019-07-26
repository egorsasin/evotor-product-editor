import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../shared";

@Component({
  selector: "app-product-editor",
  templateUrl: "./product-editor.component.html",
  styles: []
})
export class ProductEditorComponent implements OnInit {
  @Input()
  product: Product;

  @Output("close")
  close = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  cancel() {
    this.close.emit();
  }
}
