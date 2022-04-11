import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGiftCardPrice } from 'src/app/core/interfaces/giftCardPrices';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(public http: HttpClient) { }

  getCurrentRatios(cardKey:string): Observable<any> {
    return this.http.get(environment.apiUrl + '/classes/Prices/' + cardKey, {headers: environment.requestHeaders})
  }

}
