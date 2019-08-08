import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { EvoStore } from '../shared';
import { getStores, State} from '../evo-stores/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'evo-store-selector',
  templateUrl: './store-selector.component.html',
})
export class StoreSelectorComponent implements OnInit {

  public stores: Observable<EvoStore[]>;

  constructor(
    public modal: NgbActiveModal,
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.stores = this.store.select(getStores);
  }

}
