import { Component, OnInit } from "@angular/core";
import { StoresService, Store } from "../../shared";
import { ActivatedRoute } from "@angular/router";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  public currentStore: Store;
  public stores: Store[];

  constructor(
    private storesService: StoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { store: Store; stores: Store[] }) => {
      this.currentStore = data.store;
      this.stores = data.stores.filter(
        (store: Store) => store !== this.currentStore
      );
    });
  }

  changeStore(store: Store) {
    this.storesService.currentStore = store;
    this.currentStore = store;
  }
}
