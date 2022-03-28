import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegService {
  getRegister() {
    throw new Error('Method not implemented.');
  }

 
  url1= "http://localhost:8000/api/user";

  constructor( private http: HttpClient) { }

  public fetchAPI() : Observable<user[]>
  {
    return this.http.get<user[]>('http://localhost:8000/api/user');
  }

  getapi(){
    return this.http.get('http://localhost:8000/api/user')
  }
 

  getCurrentProductData(_id:any){
    return this.http.get(`${this.url1}/${_id}`)
  }

 
}

