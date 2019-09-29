import { Component, OnInit, HostListener } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { ModelService } from "src/app/services/model/model.service";
import { InventryService } from "src/app/services/inventry/inventry.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-inventry",
  templateUrl: "./add-inventry.component.html",
  styleUrls: ["./add-inventry.component.css"]
})
export class AddInventryComponent implements OnInit {
  inventryForm: FormGroup;
  allModels;
  file;
  constructor(
    private formBuilder: FormBuilder,
    private model: ModelService,
    private inent: InventryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchAllModels();
    this.inventryForm = this.formBuilder.group({
      modelName: "",
      color: "",
      year: "",
      registrationNo: "",
      note: "",
      pic1: "",
      pic2: "",
      manufacturer: ""
    });
  }

  onSubmit = () => {
    // console.log(this.inventryForm.value);
    this.inent
      .submitInventry(this.toFormData(this.inventryForm.value))
      .subscribe(data => {
        this.router.navigate(["/inventry"]);
      });
  };
  @HostListener("change", ["$event.target.files"]) emitfiles(event: FileList) {
    if (event) {
      // const file = event && event.item(0);
      // this.inventryForm.addControl("image", new FormControl(file));
      // this.file = file;
      // console.log(file);
    }
  }

  fetchAllModels = () => {
    this.model.getAllModel().subscribe(data => {
      this.allModels = data;
      // console.log(data);
    });
  };

  setSelectedValue = model => {
    console.log(model.modelTitle);
    console.log(this.inventryForm);
    // this.inventryForm.manufacturer.value = model.modelTitle;
  };

  changeImage = (type, event) => {
    const file = event && event.item(0);
    if (type == "image1") {
      this.inventryForm.addControl("image1", new FormControl(file));
    }
    if (type == "image2") {
      this.inventryForm.addControl("image2", new FormControl(file));
    }
  };

  toFormData<T>(formValue: T) {
    const formData = new FormData();

    for (const key of Object.keys(formValue)) {
      const value = formValue[key];
      formData.append(key, value);
    }
    return formData;
  }
}
