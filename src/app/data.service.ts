import { Injectable } from '@angular/core';
import { productinter } from './models/product.models';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { natureInfo } from './models/natureinfo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }
  //nature data

  getnaturedata():Observable<natureInfo[]>{
    return this.hc.get<natureInfo[]>("http://localhost:3000/nature-data")
  }

  createNewNature(natureobj):Observable<any>
  {
    return this.hc.post<any>("http://localhost:3000/nature-data",natureobj)
  }

  updateNature(modifiedNatureObj):Observable<any>
  {
   return this.hc.put("http://localhost:3000/nature-data/"+modifiedNatureObj.id,modifiedNatureObj)
  }

  deleteNaturedata(id):Observable<any>{
    return this.hc.delete("http://localhost:3000/nature-data/"+id)
  }

  userloginstatus():boolean{
     if(localStorage.getItem("username")==null)
     {
       return false;
     }
     else{
       return true;
     }
  }

  userlogout(){
    localStorage.clear();
  }



}
