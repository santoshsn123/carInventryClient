import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../common.service";

@Component({
  selector: "app-left-panel",
  templateUrl: "./left-panel.component.html",
  styleUrls: ["./left-panel.component.css"]
})
export class LeftPanelComponent implements OnInit {
  constructor(private router: Router, public common: CommonService) {}

  ngOnInit() {}
  logoutClicked = () => {
    localStorage.removeItem("user");
    this.common.loggedInState = false;
    this.router.navigate(["/login"]);
  };
}
