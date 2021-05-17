import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NatureComponent } from './nature/nature.component';
import { WildlifeComponent } from './wildlife/wildlife.component';
import { FashionComponent } from './fashion/fashion.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailsComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ContactUsComponent,
    NatureComponent,
    WildlifeComponent,
    FashionComponent,
    PagenotfoundComponent,
    Test1Component,
    Test2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
