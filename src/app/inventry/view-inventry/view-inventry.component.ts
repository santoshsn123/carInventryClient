import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { InventryService } from "src/app/services/inventry/inventry.service";
import { CommonService } from "src/app/common.service";

@Component({
  selector: "app-view-inventry",
  templateUrl: "./view-inventry.component.html",
  styleUrls: ["./view-inventry.component.css"]
})
export class ViewInventryComponent implements OnInit {
  id;
  invent;
  constructor(
    private route: ActivatedRoute,
    private inventry: InventryService,
    public common: CommonService,
    private router: Router
  ) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      console.log(this.id);
      if (this.id) {
        this.getSingleInventry(this.id);
      }
    });
  }

  ngOnInit() {}
  getSingleInventry = id => {
    this.inventry.getOneInvs(id).subscribe(data => {
      this.invent = data;
      console.log(data);
    });
  };
  deleteInventry = () => {
    if (
      confirm(
        "It will get deleted from Inventry, are you sure you want to Proceed?"
      )
    ) {
      this.inventry.deleteInventry(this.id).subscribe(data => {
        this.router.navigate(["/inventry"]);
      });
    }
  };
}
