import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './admin/administration/administration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home', component: HomeComponent
  },
   {
   path:'admin/administration', component: AdministrationComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
