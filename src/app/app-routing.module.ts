import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FashionComponent } from './fashion/fashion.component';
import {HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NatureComponent } from './nature/nature.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UsersComponent } from './users/users.component';
import { WildlifeComponent } from './wildlife/wildlife.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'test1',component:Test1Component},
  {path:'test2',component:Test2Component},
  {path:'users',component:UsersComponent},
  {path:'users/:id',component:UsersDetailsComponent},
  {path:'contactus',component:ContactUsComponent} ,
  {path:'album',component:ProductsComponent,children:[
    {path:'nature',component:NatureComponent},
    {path:'wildlife',component:WildlifeComponent},
    {path:'fashion',component:FashionComponent},
    {path:'',redirectTo:'/album/fashion',pathMatch:'full'}
  ]},
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
