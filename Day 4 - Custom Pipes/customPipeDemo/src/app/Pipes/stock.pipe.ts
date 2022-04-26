import { Pipe, PipeTransform } from "@angular/core";




@Pipe({name:'investmentresult'})
export class StockPipe implements PipeTransform
{

    transform(value:any,purchasePrice:number,currentPrice:number) {
        
            if(purchasePrice > currentPrice)
            {
                return 'Loss';
            }
            else
            {
                return 'Profit'
            }
    }

}