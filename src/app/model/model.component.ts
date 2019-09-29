import { Component, OnInit } from "@angular/core";
import { ModelService } from "../services/model/model.service";

@Component({
  selector: "app-model",
  templateUrl: "./model.component.html",
  styleUrls: ["./model.component.css"]
})
export class ModelComponent implements OnInit {
  allModels;
  constructor(private model: ModelService) {}

  ngOnInit() {
    this.fetchAllModels();
  }

  fetchAllModels = () => {
    this.model.getAllModel().subscribe(data => {
      this.allModels = data;
      // console.log(data);
    });
  };

  deleteModel = id => {
    if (confirm("Do You really want to delete this record?")) {
      this.model.deleteModel(id).subscribe(data => {
        this.fetchAllModels();
        alert("Record Deleted Successfully");
      });
    }
  };
}
