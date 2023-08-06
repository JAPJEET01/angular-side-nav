import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { InternshipsComponent } from './internships/internships.component';
import { CollegeComponent } from './college/college.component';

const routes: Routes = [
  {path:'layout', component:LayoutComponent,
children:[
  {path:'about' , component:AboutComponent},
  {path:'education' , component:EducationComponent},
  {path:'internship' , component:InternshipsComponent},
  {path:'college' , component:CollegeComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
