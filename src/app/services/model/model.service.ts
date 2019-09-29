import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CommonService } from "src/app/common.service";

@Injectable({
  providedIn: "root"
})
export class ModelService {
  constructor(private http: HttpClient, private common: CommonService) {}

  createModel = data => {
    return this.http.post(this.common.baseUrl + "model", data);
  };

  updateModel = (id, data) => {
    return this.http.put(this.common.baseUrl + "model/" + id, data);
  };
  getAllModel = () => {
    return this.http.get(this.common.baseUrl + "model");
  };
  getOneModel = id => {
    return this.http.get(this.common.baseUrl + "model/" + id);
  };
  deleteModel = id => {
    return this.http.delete(this.common.baseUrl + "model/" + id);
  };
}
