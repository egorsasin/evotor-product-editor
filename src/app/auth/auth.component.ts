import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { TokenService } from "../shared";

@Component({
  selector: "app-auth",
  template: "",
  styles: []
})
export class AuthComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.tokenService.setToken(params.get("token"));
      this.router.navigateByUrl("/");
    });
  }
}
