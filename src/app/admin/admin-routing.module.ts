import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdFashionComponent } from './ad-fashion/ad-fashion.component';
import { AdNatureComponent } from './ad-nature/ad-nature.component';
import { AdWildlifeComponent } from './ad-wildlife/ad-wildlife.component';
import { AdminComponent } from './admin.component';
import { CreateNatureAdminComponent } from './create-nature-admin/create-nature-admin.component';
import { EditNatureAdminComponent } from './edit-nature-admin/edit-nature-admin.component';

const routes: Routes = [{ path: '', component: AdminComponent ,children:[
  {path:'admin-nature',component:AdNatureComponent,children:[
    {path:'create-nature',component:CreateNatureAdminComponent},
    {path:'edit-nature',component:EditNatureAdminComponent}
  ]},
  {path:'admin-wildlife',component:AdWildlifeComponent},
  {path:'admin-fashion',component:AdFashionComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
