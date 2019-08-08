import { Component, OnInit } from "@angular/core";
import { EvoStoresService } from "../../shared";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StoreSelectorComponent } from 'src/app/store-selector/store-selector.component';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  //public currentStore: Store;
  //public stores: Store[];

  constructor(
    private storesService: EvoStoresService,
    private route: ActivatedRoute,
    private modalService: NgbModal
  ) {}

  public open() {
    this.selectStore();  
  }


  private selectStore() {
    const storeSelector = this.modalService.open(StoreSelectorComponent, { backdrop: 'static' });
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
