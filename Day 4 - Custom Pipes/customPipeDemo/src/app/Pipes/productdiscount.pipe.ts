import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productdiscount'
})
export class ProductdiscountPipe implements PipeTransform {


  // for 100's of category, we will pull the info from rest api, which talks to database
  //database base we keep changeing the value
  transform(value:any, price:number) {
    if(value == 'Cold-Drink')
    {
      // this means 10% discount on cold-drinks
      return (price * 90) /100;
    }
    else if(value == 'Electronics')
    {
      return (price * 85)/100;
    }
    else if(value == 'CAR')
    {
      return (price * 80) / 100;
    }
    else
    {
      return price;
    }
  }

}
