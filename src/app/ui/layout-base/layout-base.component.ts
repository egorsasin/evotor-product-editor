import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-layout-base",
  templateUrl: "./layout-base.component.html",
  styles: []
})
export class LayoutBaseComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => console.log(data));
  }
}
