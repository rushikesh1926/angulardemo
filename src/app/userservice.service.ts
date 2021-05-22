import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usersdata } from './models/users.models';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private hc:HttpClient) { }

  getusersdata():Observable<usersdata[]>
  {
    return this.hc.get<usersdata[]>('http://localhost:3000/users')
  }

  getusersdetails(id):Observable<usersdata>
  {
    return this.hc.get<usersdata>('http://localhost:3000/users/'+id)
  }
}
