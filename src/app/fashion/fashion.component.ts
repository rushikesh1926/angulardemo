import { Component, OnInit } from '@angular/core';
import { productinter } from '../models/product.models';
import { FashionDataService} from '../fashion-data.service'

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {


  fashionarray:productinter[]=[];

  constructor(private fashionobj:FashionDataService){}

  ngOnInit(){

    this.fashionarray=this.fashionobj.getfashiondata();

  }
  
}
