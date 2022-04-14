import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';
import { PriceService } from 'src/app/core/price.service';
import { TransactionsService } from 'src/app/feature/transactions/transactions.service';

@Component({
  selector: 'app-crypto-market',
  templateUrl: './crypto-market.component.html',
  styleUrls: ['./crypto-market.component.css']
})
export class CryptoMarketComponent implements OnInit {

  @ViewChild('cryptoForm') form!: NgForm

  selectedCurrency: string = 'BTC'
  successfulTransaction: boolean = false;
  totalAmount: string = '0';
  selectedAmount: Number = 0;
  currentPrices: any = {
    BTC: 'NaN',
    ETH: 'NaN',
  }

  constructor(private cryptoPriceService: PriceService, private authService: AuthService, private transactionService: TransactionsService) { }

  ngOnInit(): void {
    this.cryptoPriceService.getPrices().subscribe(
      response => {
        this.currentPrices.BTC = Number(response[0].price * 0.9).toFixed(0)
        this.currentPrices.ETH = Number(response[1].price * 0.9).toFixed(0)
        this.totalAmount = (Number(this.selectedAmount) * Number(this.currentPrices[this.selectedCurrency])).toFixed(1);
      }
    )
  }

  onTypeChange(event: any): void {
    this.selectedCurrency = event.target.value;
    this.totalAmount = (Number(this.selectedAmount) * Number(this.currentPrices[this.selectedCurrency])).toFixed(1);
  }

  onAmountChange(event: any): void {
    this.selectedAmount = event.target.value.split(',').join('.');
    this.totalAmount = (Number(this.selectedAmount) * Number(this.currentPrices[this.selectedCurrency])).toFixed(1);
  }

  onSubmit(): void {
    const userId = this.authService.getUserId();
    const transaction = {
      "currencyFrom": this.selectedCurrency,
      "currencyTo": '$',
      "amountTo": Number(this.totalAmount),
      "amountFrom": Number(this.selectedAmount),
      "userId": userId
    }
    this.transactionService.postTransaction(transaction).subscribe(
      response => {
        console.log(response);
        this.successfulTransaction = true;
      }
    )
  }

  sellAnother(): void {
    this.successfulTransaction = false;
  }
}