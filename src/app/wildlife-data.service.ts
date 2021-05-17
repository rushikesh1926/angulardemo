import { Injectable } from '@angular/core';
import { productinter } from './models/product.models';

@Injectable({
  providedIn: 'root'
})
export class WildlifeDataService {

  constructor() { }

  //wildlife data 
  private wildlife:productinter[]=[
    {
    productimage:"https://tse4.mm.bing.net/th?id=OIP.HvzLr8HvdeJ_7aRAKZJukgHaE8&pid=Api&P=0&w=238&h=160",
    producttitle:"Tiger",
    productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      productimage:"https://tse2.mm.bing.net/th?id=OIP.AB2huHLPGC_iPS5rDObs0wHaE8&pid=Api&P=0&w=249&h=167",
      producttitle:"baby tigers",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      productimage:"https://tse3.mm.bing.net/th?id=OIP.hZoPvRFYU429HY6tJ33OugHaFA&pid=Api&P=0&w=246&h=167",
      producttitle:"Squireel",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      productimage:"https://tse3.mm.bing.net/th?id=OIP.klHX6pQltXOS0Ls9m9sr5gHaE7&pid=Api&P=0&w=230&h=154",
      producttitle:"Elephants",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    {
      productimage:"https://tse3.mm.bing.net/th?id=OIP.v9AMC-ZQdsTwSM8QyKKXIQHaEd&pid=Api&P=0&w=340&h=206",
      producttitle:"American fox",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  these are baby american fox"
    },
    {
      productimage:"https://tse4.mm.bing.net/th?id=OIP.B69ZhPcAaGAwBFepKobBbwHaE8&pid=Api&P=0&w=256&h=172",
      producttitle:"Nat-Geo cubs",
      productdescription:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer"
      }
  ];

  getwildlifedata():productinter[]{
    return this.wildlife;
  }
  

}
