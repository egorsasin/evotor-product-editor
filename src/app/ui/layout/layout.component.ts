import { Component, OnInit } from "@angular/core";
import { StoresService } from "../../shared";
import { Router } from "@angular/router";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styles: []
})
export class LayoutComponent implements OnInit {
  constructor(private storeService: StoresService, private router: Router) {}

  ngOnInit() {
    console.log("Layout Component");
    this.storeService.getStores().subscribe(stores => {
      if (stores) {
        this.storeService.currentStore = stores[0];
        this.router.navigateByUrl(`/${stores[0].id}`);
      }
    });
  }
}
