import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModelComponent } from './model/model.component';
import { AddModelComponent } from './model/add-model/add-model.component';
import { InventryComponent } from './inventry/inventry.component';
import { AddInventryComponent } from './inventry/add-inventry/add-inventry.component';
import { ViewInventryComponent } from './inventry/view-inventry/view-inventry.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, LeftPanelComponent, DashboardComponent, ModelComponent, AddModelComponent, InventryComponent, AddInventryComponent, ViewInventryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
