import { Component, OnInit, HostBinding } from "@angular/core";
import { sidebarAnimation } from "./animations";

@Component({
  selector: "evo-sidebar",
  templateUrl: "./sidebar.component.html",
  animations: [sidebarAnimation]
})
export class SidebarComponent implements OnInit {
  @HostBinding("@sidebarAnimation")
  sidebarAnimation = true;

  constructor(

  ) {}

  ngOnInit() {
    // this.productEventService.selectedProduct.subscribe(
    //   product => (this.product = product)
    // );
  }

  // private makeForm() {
  //   this.productForm = this.formBuilder.group({
  //     name: ["", [Validators.required]],
  //     parentUuid: [false],
  //     parent: [false],
  //     type: [false]
  //   });
  // }

  // onSubmit() {
  //   const parentUuid = this.product.parentUuid;
  //   const currentStore = this.storesService.currentStore;
  //   Object.assign(this.product, this.productForm.value);
  //   this.productsService.saveProduct(this.product).subscribe(result => {
  //     if (parentUuid !== this.product.parentUuid) {
  //       console.log("Delete value");
  //       this.cacheService.deleteCacheValue(
  //         `${parentUuid}_${currentStore.uuid}`,
  //         this.product
  //       );
  //     }
  //     this.cacheService.updateCacheValue(
  //       `${this.product.parentUuid}_${currentStore.uuid}`,
  //       this.product
  //     );
  //     this.router.navigate(["../../"], { relativeTo: this.route });
  //   });
  // }

  close() {
    //this.productEventService.selectProduct(null);
  }

  // open() {
  //   const modalRef = this.modalService.open(GroupSelectorComponent);
  //   modalRef.componentInstance.product = this.product;
  //   from(modalRef.result).subscribe(
  //     (result: Product) => {
  //       this.productForm.controls["parentUuid"].setValue(
  //         result ? result.uuid : null
  //       );
  //       this.productForm.controls["parent"].setValue(result ? result.name : "");
  //     },
  //     error => {}
  //   );
  // }
}
