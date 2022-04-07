import { Component, OnInit } from '@angular/core';
import { IBlogPost } from 'src/app/core/interfaces/blogPost';
import { PriceService } from 'src/app/core/price.service';
import { BlogService } from 'src/app/feature/blog/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  actionsArr: any = [
    {
      currencyFromLong: 'BitCoin',
      currencyFromShort: 'BTC',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 1.36,
      amountTo: 306102.23
    },
    {
      currencyFromLong: 'BitCoin',
      currencyFromShort: 'BTC',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 1.66,
      amountTo: 406102.23
    },
    {
      currencyFromLong: 'Etherium',
      currencyFromShort: 'ETH',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 2.16,
      amountTo: 506102.23
    },
    {
      currencyFromLong: 'BitCoin',
      currencyFromShort: 'BTC',
      currencyToLong: 'Bank Transfer',
      currencyToShort: '$',
      amountFrom: 2.76,
      amountTo: 606102.23
    }
  ]

  blogPostsArr: IBlogPost[] = []

  currentPrices:any = {
    BTC_sell: 'NaN',
    BTC_buy: 'NaN',
    ETH_sell: 'NaN',
    ETH_buy: 'NaN',
  }

  apiErrors:string = ''

  constructor(private priceService:PriceService, private blogService: BlogService) { }

  ngOnInit(): void {
    this.priceService.getPrices().subscribe(
      response => {
        this.currentPrices.BTC_sell = Number(response[0].price*1.1).toFixed(0)
        this.currentPrices.BTC_buy = Number(response[0].price*0.9).toFixed(0)
        this.currentPrices.ETH_sell = Number(response[1].price*1.1).toFixed(0)
        this.currentPrices.ETH_buy = Number(response[1].price*0.9).toFixed(0)
      },
      err => {
        this.apiErrors = err.message
        console.error(err)
      }
    )
    this.blogService.getAllPosts().subscribe(
      response => {
        this.blogPostsArr = response.results.slice(0,3);
      }
    )
  }

}
