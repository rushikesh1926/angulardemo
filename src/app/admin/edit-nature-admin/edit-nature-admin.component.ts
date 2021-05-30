import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { natureInfo } from 'src/app/models/natureinfo.model';

@Component({
  selector: 'app-edit-nature-admin',
  templateUrl: './edit-nature-admin.component.html',
  styleUrls: ['./edit-nature-admin.component.css']
})
export class EditNatureAdminComponent implements OnInit {

  naturedata:natureInfo[]=[];

  editNatureIndex;
  editNatureObj=new natureInfo('','','');
  editNatureStatus:boolean=false;



  constructor(private dsobj:DataService) { }

  ngOnInit(): void {
    this.getnaturedetails()
  }

  getnaturedetails(){
    this.dsobj.getnaturedata().subscribe(
      data=>{
        this.naturedata=data;
      },
      err=>{
        console.log("err is ",err)
      }
    )
  }

  editNature(natureObj,ind){
    this.editNatureObj=natureObj;
    this.editNatureIndex=ind;
    this.editNatureStatus=true;
  }

  saveNature(modifiedNatureObj){

    this.editNatureStatus=false;

    modifiedNatureObj.id=this.editNatureObj["id"];
    modifiedNatureObj.productimage=this.editNatureObj["productimage"]

    this.dsobj.updateNature(modifiedNatureObj).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log("err is",err)
      }
    )
    console.log(modifiedNatureObj)

  }

  deleteNature(natureObj){
    this.dsobj.deleteNaturedata(natureObj.id).subscribe(
      res=>{
        console.log("element deleted of id",natureObj.id)
        this.getnaturedetails();
        alert("element deleted")
      },
      err=>{
        console.log("err is",err)
      }
    )
  }

}
