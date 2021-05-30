import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdNatureComponent } from './ad-nature/ad-nature.component';
import { AdWildlifeComponent } from './ad-wildlife/ad-wildlife.component';
import { AdFashionComponent } from './ad-fashion/ad-fashion.component';
import { CreateNatureAdminComponent } from './create-nature-admin/create-nature-admin.component';
import { EditNatureAdminComponent } from './edit-nature-admin/edit-nature-admin.component';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AdminComponent,
    AdNatureComponent,
    AdWildlifeComponent,
    AdFashionComponent,
    CreateNatureAdminComponent,
    EditNatureAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule
  ]
})
export class AdminModule { }
