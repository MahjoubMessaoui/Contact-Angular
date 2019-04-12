import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HommeComponent } from './homme/homme.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import { NewcontactComponent } from './newcontact/newcontact.component';

const routes: Routes = [
  {path:"" , component:LoginComponent},
  {path:"homme" , component:HommeComponent},
   {path:"listcontact" , component:ListcontactComponent},
   {path:"newcontact" , component:NewcontactComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
