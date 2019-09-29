import { Component, OnInit } from "@angular/core";
import { InventryService } from "../services/inventry/inventry.service";

@Component({
  selector: "app-inventry",
  templateUrl: "./inventry.component.html",
  styleUrls: ["./inventry.component.css"]
})
export class InventryComponent implements OnInit {
  allInvs;
  constructor(private inventry: InventryService) {}

  ngOnInit() {
    this.fetchAllInventry();
  }
  fetchAllInventry = () => {
    // console.log("Hello There ");
    this.inventry.getAllInvs().subscribe(data => {
      console.log(data);
      this.allInvs = data;
    });
  };
}
