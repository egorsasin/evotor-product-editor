import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';


import { EvoStore } from '../../shared';
import { State, selectAll } from '../store';
import { selectStore } from '../store/actions';

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
    this.stores = this.store.select(selectAll);
  }

  select(id: string) {
    this.store.dispatch(selectStore({ id }));
    this.modal.close();
  }

}
