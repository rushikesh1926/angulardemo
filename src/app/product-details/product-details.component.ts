import { Component, Input ,EventEmitter,Output } from '@angular/core';


import { productinter } from '../models/product.models';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

@Input()  productdetailsobj:productinter;

@Output() myevent=new EventEmitter()

sendproducttoparent(productdetcomponent)
{
    this.myevent.emit(productdetcomponent);
}

}
