import { Component, OnInit } from "@angular/core";

@Component({
  selector: "evo-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  //public currentStore: Store;
  //public stores: Store[];

  constructor(
    // private storesService: EvoStoresService,
    // private route: ActivatedRoute,
    // private modalService: NgbModal
  ) {}

  public open() {
    //this.selectStore();  
  }


  private selectStore() {
    //const storeSelector = this.modalService.open(StoreSelectorComponent, { backdrop: 'static' });
  }

  ngOnInit() {
    // this.route.data.subscribe((data: { store: Store; stores: Store[] }) => {
    //   this.currentStore = data.store;
    //   this.stores = data.stores.filter(
    //     (store: Store) => store !== this.currentStore
    //   );
    // });
  }

  //changeStore(store: Store) {
  //   this.storesService.currentStore = store;
  //   this.currentStore = store;
  //}
}
