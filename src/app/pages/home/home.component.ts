import { Component, OnInit } from '@angular/core';
import { IBlogPost } from 'src/app/core/interfaces/blogPost';
import { ITransactions } from 'src/app/core/interfaces/transactions';
import { PriceService } from 'src/app/core/price.service';
import { BlogService } from 'src/app/feature/blog/blog.service';
import { TransactionsService } from 'src/app/feature/transactions/transactions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogPostsArr: IBlogPost[] = []
  transactionsArr: ITransactions[] = []

  displayData: any = {
    '$': {
      displayShort: '$',
      displayLong: 'Bank Transfer'
    },
    'BTC': {
      displayShort: 'BTC',
      displayLong: 'BitCoin'
    },
    'ETH': {
      displayShort: 'ETH',
      displayLong: 'Etherium'
    },
    'amazon': {
      displayShort: 'AmzC',
      displayLong: 'Amazon GiftCard'
    },
    'apple': {
      displayShort: 'AppC',
      displayLong: 'App Store GiftCard'
    },
    'steam': {
      displayShort: 'StmC',
      displayLong: 'Steam GiftCard'
    },
    'google': {
      displayShort: 'GglC',
      displayLong: 'Google GiftCard'
    },
  }

  currentPrices: any = {
    BTC_sell: 'NaN',
    BTC_buy: 'NaN',
    ETH_sell: 'NaN',
    ETH_buy: 'NaN',
  }

  apiErrors: string = ''

  constructor(private priceService: PriceService, private blogService: BlogService, private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.priceService.getPrices().subscribe(
      response => {
        this.currentPrices.BTC_sell = Number(response[0].price * 1.1).toFixed(0)
        this.currentPrices.BTC_buy = Number(response[0].price * 0.9).toFixed(0)
        this.currentPrices.ETH_sell = Number(response[1].price * 1.1).toFixed(0)
        this.currentPrices.ETH_buy = Number(response[1].price * 0.9).toFixed(0)
      },
      err => {
        this.apiErrors = err.message
        console.error(err)
      }
    );
    this.blogService.getLatestPosts().subscribe(
      response => {
        this.blogPostsArr = response.results;
      }
    );
    this.transactionsService.getLastTransactions().subscribe(
      response => {
        this.transactionsArr = response.results
      }
    )
  }

}
