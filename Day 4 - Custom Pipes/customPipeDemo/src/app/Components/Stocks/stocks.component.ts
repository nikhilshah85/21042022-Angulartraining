import { Component } from "@angular/core";


@Component({
    selector:'stocks',
    templateUrl:'./stocks.component.html',
    styleUrls:['./stocks.component.css']
})
export class Stocks
{
    stockHoldings = [
        {stockid:101, stockName:'RIL', stockPurchase:1700,stockCurrentPrice:2600, stockQty:10},
        {stockid:101, stockName:'INFY', stockPurchase:50,stockCurrentPrice:80, stockQty:10},
        {stockid:101, stockName:'Ashok', stockPurchase:180,stockCurrentPrice:20, stockQty:10},
        {stockid:101, stockName:'RIL', stockPurchase:395,stockCurrentPrice:400, stockQty:10},
        {stockid:101, stockName:'RIL', stockPurchase:2780,stockCurrentPrice:2200, stockQty:10},
        {stockid:101, stockName:'RIL', stockPurchase:1180,stockCurrentPrice:900, stockQty:10},
        {stockid:101, stockName:'RIL', stockPurchase:789,stockCurrentPrice:1200, stockQty:10},
        {stockid:101, stockName:'RIL', stockPurchase:365,stockCurrentPrice:200, stockQty:10},
        {stockid:101, stockName:'RIL', stockPurchase:5,stockCurrentPrice:3, stockQty:10},
        {stockid:101, stockName:'RIL', stockPurchase:12,stockCurrentPrice:18, stockQty:10},
        {stockid:101, stockName:'RIL', stockPurchase:89,stockCurrentPrice:60, stockQty:10},
        {stockid:101, stockName:'RIL', stockPurchase:63,stockCurrentPrice:45, stockQty:10},
    ]
}