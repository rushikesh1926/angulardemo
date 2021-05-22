import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usersdata } from '../models/users.models';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit,OnDestroy {

  constructor(private ar:ActivatedRoute,private usdobj:UserserviceService) { }
 
  mysubscription:any;
  myuserdetails:usersdata;
  ngOnInit(): void {

  let id=this.ar.snapshot.params.id;

 this.mysubscription=this.usdobj.getusersdetails(id).subscribe(
    data=>{
      this.myuserdetails=data;
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
