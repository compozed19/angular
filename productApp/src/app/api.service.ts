import { Injectable } from '@angular/core';
import  {Product} from './product';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import  {map,catchError,tap} from 'rxjs/operators';
import { ok } from 'assert';
 
const httpOptions ={
  headers : new HttpHeaders({'Content-Type' : 'application/json'}),
}

// const apiUrl = "/api/v1/products";
const apiUrl = 'http://localhost:3000/'



@Injectable({
  // this service should be created 
  //by the root  application Injector
  providedIn: 'root'
})
export class ApiService {
  constructor(private http : HttpClient) { }

  private handleError<T> (operation = 'operation', result?:T){
    return (error:any): Observable<T> => {
      console.error("errror");
      return of(result as T);
    }
  }

  // getProducts () : Observable<Product[]>{
  //   debugger
  //   return this.http.get<Product[]>(apiUrl)
  //   .pipe(
  //     tap(data => console.log("fetched products",data)),
  //   catchError(this.handleError('getProducts',[])));
  // }


  getProducts () {
    return([{
      id : 123,
      prod_name : "Product1",
      prod_desc : "Product desc",
      prod_price : 1234,
  }])
 
}
}
