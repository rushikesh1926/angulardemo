import { Component } from '@angular/core';
import { productinter } from '../models/product.models';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products:productinter[]=[
    {
    productimage:"https://static.wixstatic.com/media/cae8d2_35dd5163994046fb8d3f3824e4d2c389~mv2_d_1920_1282_s_2.jpg/v1/fill/w_1099,h_734,al_c,q_85,usm_0.66_1.00_0.01/cae8d2_35dd5163994046fb8d3f3824e4d2c389~mv2_d_1920_1282_s_2.webp",
    producttitle:"nautre-1",
    productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      productimage:"https://static.wixstatic.com/media/cae8d2_3f690ad4403e4d509fd86dbd4ab10bad~mv2_d_1920_1260_s_2.jpg/v1/fill/w_1118,h_734,al_c,q_85,usm_0.66_1.00_0.01/cae8d2_3f690ad4403e4d509fd86dbd4ab10bad~mv2_d_1920_1260_s_2.webp",
      producttitle:"nautre-2",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      productimage:"https://static.wixstatic.com/media/cae8d2_f21a88c0f678413a8e57b75800853d4e~mv2_d_1920_1281_s_2.jpg/v1/fill/w_1100,h_734,al_c,q_85,usm_0.66_1.00_0.01/cae8d2_f21a88c0f678413a8e57b75800853d4e~mv2_d_1920_1281_s_2.webp",
      producttitle:"nautre-3",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      productimage:"https://static.wixstatic.com/media/cae8d2_c033c0d26d394285a2d4ebc927c1be71~mv2_d_1920_1280_s_2.jpg/v1/fill/w_1101,h_734,al_c,q_85,usm_0.66_1.00_0.01/cae8d2_c033c0d26d394285a2d4ebc927c1be71~mv2_d_1920_1280_s_2.webp",
      producttitle:"nautre-4",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      productimage:"https://static.wixstatic.com/media/cae8d2_39b43e0cfa0d42be8cf6fe9277819562~mv2_d_1920_1280_s_2.jpg/v1/fill/w_1101,h_734,al_c,q_85,usm_0.66_1.00_0.01/cae8d2_39b43e0cfa0d42be8cf6fe9277819562~mv2_d_1920_1280_s_2.webp",
      producttitle:"nautre-5",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      productimage:"https://static.wixstatic.com/media/cae8d2_b22cdc2f7cfe48199041c61882648e24~mv2_d_1920_1280_s_2.jpg/v1/fill/w_1101,h_734,al_c,q_85,usm_0.66_1.00_0.01/cae8d2_b22cdc2f7cfe48199041c61882648e24~mv2_d_1920_1280_s_2.webp",
      producttitle:"nautre-6",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
      }
  ]
  
  
  productssentbychild=[];
  productcount:number=0;

  getproductssentbychild(productdetcomponent)
  {
    this.productssentbychild.push(productdetcomponent);
    this.productcount++;
  }

  

}
