import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ReadmeComponent } from './readme/readme.component';
import { QaComponent } from './qa/qa.component';

const routes:Routes = [
  {path:"readme",component:ReadmeComponent},
  {path:"qa",component:QaComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/readme",pathMatch:"full"}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule { }
