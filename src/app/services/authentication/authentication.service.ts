import { Injectable } from "@angular/core";
import { CommonService } from "src/app/common.service";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  baseUrl: string;
  constructor(private common: CommonService, private http: HttpClient) {
    this.baseUrl = this.common.baseUrl;
  }

  authentication = data => {
    return this.http.post(this.baseUrl + "login", data);
  };
}
