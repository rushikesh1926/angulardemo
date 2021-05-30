import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  onLogin(ref)
  {
   let userloginobj=ref.value;

   if(userloginobj.username!='rushikesh_littu')
   {
      alert("invalid credentials")
   }
   else if (userloginobj.phone!=9390440154) {
    alert("invalid credentials")
   }
   else
   {
      localStorage.setItem("username","rushikesh_littu");
      this.router.navigateByUrl('/admin');
     
   }
   
  }
}
