import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { natureInfo } from 'src/app/models/natureinfo.model';

@Component({
  selector: 'app-create-nature-admin',
  templateUrl: './create-nature-admin.component.html',
  styleUrls: ['./create-nature-admin.component.css']
})
export class CreateNatureAdminComponent implements OnInit {

  constructor(private dsobj:DataService) { }

  ngOnInit(): void {
  }

  natureModel=new natureInfo('','','');

  onSubmitNature()
  {
    console.log(this.natureModel)

    this.dsobj.createNewNature(this.natureModel).subscribe(
      res=>{},
      err=>{
        console.log("err in creating is",err)
      }


    )

    
  }

}
