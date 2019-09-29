import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "src/app/common.service";

@Injectable({
  providedIn: "root"
})
export class InventryService {
  baseUrl;
  constructor(private http: HttpClient, private common: CommonService) {
    this.baseUrl = this.common.baseUrl;
  }

  submitInventry = data => {
    return this.http.post(this.baseUrl + "inventry", data);
  };
  getAllInvs = () => {
    return this.http.get(this.baseUrl + "inventry");
  };

  getOneInvs = id => {
    return this.http.get(this.baseUrl + "inventry/" + id);
  };

  deleteInventry = id => {
    return this.http.delete(this.baseUrl + "inventry/" + id);
  };
}
