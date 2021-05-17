import { Injectable } from '@angular/core';
import { productinter } from './models/product.models';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }
  //nature data

  getnaturedata():Observable<productinter[]>{
    return this.hc.get<productinter[]>("assets/nature.json")
  }




}
