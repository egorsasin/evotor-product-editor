import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Store } from '@ngrx/store';
import * as AuthActions from './auth.actions';

@Component({
  selector: "evo-auth",
  template: "",
})
export class AuthComponent implements OnInit {
  constructor(    
    private route: ActivatedRoute,
    private store: Store<any>, 
  ) {}

  ngOnInit() { 
    
    this.route.paramMap.subscribe(params => {
      const token: string = params.get('token');  
      this.store.dispatch(AuthActions.initAction({ token }));
    });
  }

  // No need to usubscribe from ActivatedRoute on Destroy
  
}
