import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  productList = [
      {pId:101,pName:'Pepsi',pCategory:'Cold-Drink',pPrice:50},
      {pId:102,pName:'IPhone',pCategory:'Electronics',pPrice:89000},
      {pId:103,pName:'LG',pCategory:'Electronics',pPrice:45000},
      {pId:104,pName:'Fossil',pCategory:'Electronics',pPrice:35000},
      {pId:105,pName:'Trailhawk',pCategory:'CAR',pPrice:3500000},
      {pId:106,pName:'Apple Watch',pCategory:'Electronics',pPrice:50000},
      {pId:107,pName:'Appy Fizz',pCategory:'Cold-Drink',pPrice:80}
  ];





  constructor() { }

  ngOnInit(): void {
  }

}
