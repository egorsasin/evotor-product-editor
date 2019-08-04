import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Store } from '@ngrx/store';
import * as AuthActions from './auth.actions';

@Component({
  selector: "evo-auth",
  template: "",
  styles: []
})
export class AuthComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<any>, 
  ) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      const token: string = params.get("token");
      this.store.dispatch(AuthActions.initAction({ token }));
      this.router.navigateByUrl("/");
    });
  }

  // No need to usubscribe from ActivatedRoute on Destroy
  
}
