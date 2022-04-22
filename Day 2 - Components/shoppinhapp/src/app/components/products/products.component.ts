import { Component } from "@angular/core";


@Component({
    selector:'products',
    templateUrl:'./products.component.html',
    styleUrls:['./products.component.css']
})
export class Products
{
    productName="Pepsi";
    productCategory='Cold-Drink';
    productPrice= 50;
    productQty =30;
    productIsInStock = true;
    friendslist = ['Akshay','John','Priya','Riya','Aman','Sumit','Karan'];
    productInfo={
        maker:'Pepsi Inc.',
        dateofmanufacture:'10/10/2021',
        expiery:'10/02/2022',
        placeofManufacture:'Mumbai',
        costOfManufacture:30,
        marketingCost:5,
        tax:8
    }

    showProductDetails()
    {
     console.log(this.productName + ' is in ' + this.productCategory + ' Category, and will cost you ' + this.productPrice);
    }
    
}

