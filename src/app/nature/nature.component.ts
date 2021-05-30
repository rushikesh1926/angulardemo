import { Component, OnInit } from '@angular/core';
import { productinter } from '../models/product.models';
import {DataService} from '../data.service'


@Component({
  selector: 'app-nature',
  templateUrl: './nature.component.html',
  styleUrls: ['./nature.component.css']
})
export class NatureComponent implements OnInit{

  searchterm:string;
  naturearray:productinter[]=[];
  constructor(private natureobj:DataService)
  {}
  
  ngOnInit(){
    this.natureobj.getnaturedata().subscribe(
      data=>{
        this.naturearray=data;
      },
      err=>{
        console.log("err is",err)
      }

    )
  
  }
}
