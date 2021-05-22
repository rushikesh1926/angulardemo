import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { usersdata } from '../models/users.models';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,OnDestroy {

  mysubscription:any;
  myusersdata:usersdata[]=[];
  constructor(private usobj:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.mysubscription=this.usobj.getusersdata().subscribe(
      data=>{
        this.myusersdata=data;
        console.log(this.myusersdata)
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

  getselectedId(id)
  {
    this.router.navigateByUrl('users/'+id)
  }

}
