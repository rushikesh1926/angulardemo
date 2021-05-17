import { Component, OnDestroy, OnInit } from '@angular/core';
import { testone } from '../models/testone.models';
import { TestingService } from '../testing.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit,OnDestroy {
  mysubscription:any;
  mytestone:testone[]=[];
  constructor(private dsobj:TestingService) { }

  ngOnInit():void
  {
   this.mysubscription= this.dsobj.getuseronedata().subscribe(
      data=>{
        this.mytestone=data;
        console.log(this.mytestone)
      },
      err=>{
        console.log("err is",err)
      }
    )
  }

  ngOnDestroy()
  {
    this.mysubscription.unsubscribe();
  }

  
  
}
