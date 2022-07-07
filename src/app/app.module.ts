import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { SearcgDepartmentComponent } from './searcg-department/searcg-department.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    SearcgDepartmentComponent,
    ViewDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
