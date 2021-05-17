import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { testone } from './models/testone.models';
import { testtwo } from './models/testtwo.models';


@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private hc:HttpClient) { }

  getuseronedata():Observable<testone[]>
  {
    return this.hc.get<testone[]>('https://jsonplaceholder.typicode.com/users')
  }

  getusertwodata():Observable<testtwo>
  {
    return this.hc.get<testtwo>('https://reqres.in/api/unknown')
  }
}
