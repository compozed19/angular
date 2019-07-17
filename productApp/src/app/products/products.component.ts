import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import  {Product} from '../Product';
import  {map,catchError,tap} from 'rxjs/operators';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  title = 'Product Component';
  displayedColumns : string[] = ['prod_name','prod_price'];
public data : any;
 // data : Product [] =[];
  // data ={         
  //    id : 123,
  //   prod_name : "Product1",
  //   prod_desc : "Product desc",
  //   prod_price : 1234
  // };

  //  res = [{
  //         id : 123,
  //         prod_name : "Product1",
  //         prod_desc : "Product desc",
  //         prod_price : 1234,
  //     }];

  isLoadingResults =true;
  constructor(private api: ApiService ) { }

  // ngOnInit() {
  //   this.api.getProducts().subscribe(res =>{
  //     this.data = res;
  //     console.log("data is---",this.data);
  //     this.isLoadingResults = false;
  //   }, err =>{
  //     console.log("error");
  //     this.isLoadingResults =false
  //   })
  // }

ngOnInit() {
     this.api.getProducts().map(res => {
     this.data = res;
  })
  }
}
