import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const myRoute:Routes=[
  {
    path:"",component:StudentAddComponent
  },
  {
    path:"viewall",component:ViewAllComponent
  },
  {
    path:"search",component:SearchStudentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    ViewAllComponent,
    SearchStudentComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
