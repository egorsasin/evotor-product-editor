import { Component, OnInit, Input } from "@angular/core";
import { Product, ProductsService } from "../shared";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-group-selector",
  templateUrl: "./group-selector.component.html",
  styles: []
})
export class GroupSelectorComponent implements OnInit {
  @Input()
  product: Product;

  parent: Product;
  groups: Product[] = [];

  constructor(
    private productsService: ProductsService,
    public activeModal: NgbActiveModal
  ) {}

  private getFolders(uuid: string) {
    // this.productsService.getProductWithChildren(uuid).subscribe(products => {
    //   this.parent = products.find(product => product.uuid === uuid);
    //   this.groups = products.filter(
    //     product =>
    //       product.parentUuid === uuid &&
    //       (!product.group || product.uuid !== this.product.uuid)
    //   );
    // });
  }

  ngOnInit() {
    this.getFolders(this.product.parentUuid);
  }

  select(product: Product) {
    this.getFolders(product.uuid);
  }

  levelUp() {
    this.getFolders(this.parent.parentUuid);
  }
}
