import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { EvoStore, State } from 'src/app/shared';
import { getSelectedStore } from 'src/app/evo-stores/store';
import { StoreSelectorComponent } from 'src/app/evo-stores/components/store-selector.component';

@Component({
  selector: "evo-header",
  templateUrl: "./header.component.html"
})
export class HeaderComponent implements OnInit {
  public currentStore: Observable<EvoStore>;
  //public stores: Store[];

  constructor(
    // private storesService: EvoStoresService,
    // private route: ActivatedRoute,
    private store: Store<State>,
    private modalService: NgbModal
  ) {}

  public open() {
    this.selectStore();  
  }


  private selectStore() {
    const storeSelector = this.modalService.open(StoreSelectorComponent, { backdrop: 'static' });
  }

  ngOnInit() {
    this.currentStore = this.store.select(getSelectedStore);
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
