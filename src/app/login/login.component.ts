import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "../services/authentication/authentication.service";
import { Router } from "@angular/router";
import { CommonService } from "../common.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  checkoutForm: FormGroup;
  submitted: boolean;
  user;
  errorMessage: string;
  loading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
    private router: Router,
    public common: CommonService
  ) {
    if (localStorage.getItem("user")) {
      this.common.loggedInState = true;
      this.router.navigate(["/"]);
    } else {
      this.common.loggedInState = false;
    }
  }

  ngOnInit() {
    this.checkoutForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }

  onSubmit = () => {
    this.submitted = true;
    this.errorMessage = "";

    if (this.checkoutForm.invalid) {
      return;
    }
    this.loading = true;
    this.authentication
      .authentication(this.checkoutForm.value)
      .subscribe(data => {
        this.loading = false;
        this.user = data;
        if (this.user.status) {
          localStorage.setItem("user", this.user.user);
          this.router.navigate(["/"]);
          this.common.loggedInState = true;
        } else {
          this.errorMessage = this.user.message;
        }
      });
  };
}
