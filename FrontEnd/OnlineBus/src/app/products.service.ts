import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pdtdata } from './pdtdata';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getData(arg0: any) {
    throw new Error('Method not implemented.');
  }

  url=   "http://localhost:3000/api/deletebus" ;
  url1= "http://localhost:3000/api/bus";
  url2="http://localhost:3000/api/updatebus"
  constructor( private http: HttpClient) { }

  public fetchAPI() : Observable<Pdtdata[]>
  {
    return this.http.get<Pdtdata[]>('http://localhost:3000/api/bus');
  }
  getapi(){
    return this.http.get('http://localhost:3000/api/bus')
  }
  deleteProduct(employeeId:any){
    return this.http.delete(`${this.url}/${employeeId}`)
  }

  getCurrentProductData(_id:any){
    return this.http.get(`${this.url1}/${_id}`)
  }

  updateData(_id:any,data:{}){
    return this.http.put(`${this.url2}/${_id}`,data)
  }
}
