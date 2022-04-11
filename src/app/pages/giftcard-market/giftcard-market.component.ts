import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/feature/transactions/transactions.service';

@Component({
  selector: 'app-giftcard-market',
  templateUrl: './giftcard-market.component.html',
  styleUrls: ['./giftcard-market.component.css']
})
export class GiftcardMarketComponent implements OnInit {

  selectedCard: string = 'amazon'
  selectedCurrency: string = '$'
  conversionRatio: Number = 0;
  totalAmount: string = '0';
  selectedAmount: Number = 0;
  currentPrices!: any

  cardNames: any = {
    'amazon': 'Amazon',
    'apple': 'App Store',
    'google': 'Google Play',
    'steam': 'Steam',
  }
  priceIds: any = {
    'amazon': 'Mk3I3kVeZn',
    'apple': 'WCG29Nktka',
    'google': 'Mk5zcgwA2y',
    'steam': '8Z5GqQhIyv'
  }
  currencyKeys: any = {
    '$': 'dollars',
    'BTC': 'BTC',
    'ETH': 'ETH',
  }

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.transactionsService.getCurrentRatios(this.priceIds[this.selectedCard]).subscribe(
      response => {
        this.currentPrices = response
        this.conversionRatio = this.currentPrices[this.currencyKeys[this.selectedCurrency]];
        if (this.selectedCurrency == '$') {
          this.totalAmount = (Number(this.selectedAmount) * Number(this.conversionRatio)).toFixed(1)
        } else {
          this.totalAmount = (Number(this.selectedAmount) * Number(this.conversionRatio)).toFixed(4)
        }
      }
    );
  }

  onTypeChange(event: any): void {
    this.selectedCard = event.target.value;
    this.transactionsService.getCurrentRatios(this.priceIds[this.selectedCard]).subscribe(
      response => {
        this.currentPrices = response
        this.conversionRatio = this.currentPrices[this.currencyKeys[this.selectedCurrency]];
        if (this.selectedCurrency == '$') {
          this.totalAmount = (Number(this.selectedAmount) * Number(this.conversionRatio)).toFixed(1)
        } else {
          this.totalAmount = (Number(this.selectedAmount) * Number(this.conversionRatio)).toFixed(4)
        }
      }
    );
  }

  onCurrencyChange(event: any): void {
    this.selectedCurrency = event.target.value;
    this.conversionRatio = this.currentPrices[this.currencyKeys[this.selectedCurrency]];
    if (this.selectedCurrency == '$') {
      this.totalAmount = (Number(this.selectedAmount) * Number(this.conversionRatio)).toFixed(1)
    } else {
      this.totalAmount = (Number(this.selectedAmount) * Number(this.conversionRatio)).toFixed(4)
    }
  }

  onAmountChange(event: any): void {
    this.selectedAmount = event.target.value.split(',').join('.')
    if (this.selectedCurrency == '$') {
      this.totalAmount = (Number(this.selectedAmount) * Number(this.conversionRatio)).toFixed(1)
    } else {
      this.totalAmount = (Number(this.selectedAmount) * Number(this.conversionRatio)).toFixed(4)
    }
  }
}
