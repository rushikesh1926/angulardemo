import { Component, OnInit } from '@angular/core';
import { CombineLatestSubscriber } from 'rxjs/internal/observable/combineLatest';
import { productinter } from '../models/product.models';
import {WildlifeDataService} from '../wildlife-data.service'

@Component({
  selector: 'app-wildlife',
  templateUrl: './wildlife.component.html',
  styleUrls: ['./wildlife.component.css']
})
export class WildlifeComponent implements OnInit {

  wildlifearray:productinter[]=[]
  constructor(private wildobj:WildlifeDataService){

  }

  ngOnInit(){
    this.wildlifearray=this.wildobj.getwildlifedata();
  }

}
