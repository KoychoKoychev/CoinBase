import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(public http: HttpClient) { }

  getCurrentRatios(cardKey: string): Observable<any> {
    return this.http.get(environment.apiUrl + '/classes/Prices/' + cardKey, { headers: environment.requestHeaders })
  }

  postTransaction(transactionData: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/classes/Transactions/', transactionData, { headers: environment.requestHeaders })
  }

  getLastTransactions(): Observable<any> {
    return this.http.get(environment.apiUrl + '/classes/Transactions/?limit=10', { headers: environment.requestHeaders })
  }
}
