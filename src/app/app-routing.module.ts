import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ModelComponent } from "./model/model.component";
import { AddModelComponent } from "./model/add-model/add-model.component";
import { InventryComponent } from "./inventry/inventry.component";
import { AddInventryComponent } from "./inventry/add-inventry/add-inventry.component";
import { ViewInventryComponent } from "./inventry/view-inventry/view-inventry.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "model", component: ModelComponent },
  { path: "model/add", component: AddModelComponent },
  { path: "model/edit/:id", component: AddModelComponent },
  { path: "inventry", component: InventryComponent },
  { path: "inventry/add", component: AddInventryComponent },
  { path: "inventry/view/:id", component: ViewInventryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
