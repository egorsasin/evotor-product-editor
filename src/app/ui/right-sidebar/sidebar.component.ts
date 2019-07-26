// import { Component, OnInit, HostBinding } from "@angular/core";
// import { FormBuilder, Validators, FormGroup } from "@angular/forms";
// import { ActivatedRoute, Router } from "@angular/router";
// import { Product, ProductTypes } from "../shared";
// import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
// import { GroupSelectorComponent } from "../group-selector/group-selector.component";
// import { from } from "rxjs";

// import { ProductsService, CacheService, StoresService } from "../shared";
// import { sidebarAnimation } from "./animations";
// import { ProductEventService } from "../shared/services/product-event.service";

// @Component({
//   selector: "app-sidebar",
//   templateUrl: "./sidebar.component.html",
//   animations: [sidebarAnimation]
// })
// export class SidebarComponent implements OnInit {
//   @HostBinding("@sidebarAnimation")
//   sidebarAnimation = true;

//   keys = Object.keys;
//   productTypes = ProductTypes;

//   productForm: FormGroup;
//   product: Product;
//   parent: Product;

//   constructor(
//     private modalService: NgbModal,
//     private formBuilder: FormBuilder,
//     private productsService: ProductsService,
//     private cacheService: CacheService,
//     private storesService: StoresService,
//     private route: ActivatedRoute,
//     private router: Router,
//     private productEventService: ProductEventService
//   ) {}

//   ngOnInit() {
//     this.productEventService.selectedProduct.subscribe(
//       product => (this.product = product)
//     );
//   }

//   // private makeForm() {
//   //   this.productForm = this.formBuilder.group({
//   //     name: ["", [Validators.required]],
//   //     parentUuid: [false],
//   //     parent: [false],
//   //     type: [false]
//   //   });
//   // }

//   // onSubmit() {
//   //   const parentUuid = this.product.parentUuid;
//   //   const currentStore = this.storesService.currentStore;
//   //   Object.assign(this.product, this.productForm.value);
//   //   this.productsService.saveProduct(this.product).subscribe(result => {
//   //     if (parentUuid !== this.product.parentUuid) {
//   //       console.log("Delete value");
//   //       this.cacheService.deleteCacheValue(
//   //         `${parentUuid}_${currentStore.uuid}`,
//   //         this.product
//   //       );
//   //     }
//   //     this.cacheService.updateCacheValue(
//   //       `${this.product.parentUuid}_${currentStore.uuid}`,
//   //       this.product
//   //     );
//   //     this.router.navigate(["../../"], { relativeTo: this.route });
//   //   });
//   // }

//   close() {
//     this.productEventService.selectProduct(null);
//   }

//   // open() {
//   //   const modalRef = this.modalService.open(GroupSelectorComponent);
//   //   modalRef.componentInstance.product = this.product;
//   //   from(modalRef.result).subscribe(
//   //     (result: Product) => {
//   //       this.productForm.controls["parentUuid"].setValue(
//   //         result ? result.uuid : null
//   //       );
//   //       this.productForm.controls["parent"].setValue(result ? result.name : "");
//   //     },
//   //     error => {}
//   //   );
//   // }
// }
