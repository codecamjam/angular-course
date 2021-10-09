import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //angular observables are taken care of (unsubscribed when no longer needed)
    //automatically
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }
}
