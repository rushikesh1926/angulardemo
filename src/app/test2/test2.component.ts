import { Component, OnDestroy, OnInit } from '@angular/core';
import { testtwo } from '../models/testtwo.models';
import { TestingService } from '../testing.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit ,OnDestroy{
  mytesttwo:testtwo;
  mysubscriptiontwo:any;
  constructor(private test2obj:TestingService) { }

  ngOnInit(): void {
   this.mysubscriptiontwo= this.test2obj.getusertwodata().subscribe(
      data=>{
        this.mytesttwo=data;
      },
      err=>{
        console.log("err is",err)
      }
    )
  }

  ngOnDestroy()
  {
    this.mysubscriptiontwo.unsubscribe();
  }

}
