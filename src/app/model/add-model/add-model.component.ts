import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModelService } from "src/app/services/model/model.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-add-model",
  templateUrl: "./add-model.component.html",
  styleUrls: ["./add-model.component.css"]
})
export class AddModelComponent implements OnInit {
  addModel: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  errorMessage: string = "";
  id;
  fetchedData;
  constructor(
    private formBuilder: FormBuilder,
    private model: ModelService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // console.log(this.route.params.observers);
    // this.route.params.observers()
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
      if (this.id) {
        this.getSingleModel(this.id);
      }
    });
  }
  get f() {
    return this.addModel.controls;
  }
  getSingleModel = id => {
    this.model.getOneModel(id).subscribe(data => {
      // console.log("Detched Data : - ", data);
      this.fetchedData = data;
      this.addModel = this.formBuilder.group({
        title: [this.fetchedData.modelTitle, Validators.required]
      });
    });
  };
  ngOnInit() {
    this.addModel = this.formBuilder.group({
      title: ["", Validators.required]
    });
  }

  onSubmit = () => {
    this.submitted = true;
    this.errorMessage = "";

    if (this.addModel.invalid) {
      return;
    }
    this.loading = true;
    this.model.createModel(this.addModel.value).subscribe(
      data => {
        this.router.navigate(["/model"]);
      },
      error => {
        console.log("Here is an error ", error);
      }
    );
  };
}
