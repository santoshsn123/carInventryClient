import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  baseUrl: string = "http://localhost:8000/api/";
  loggedInState: boolean = true;
  constructor() {}
}
