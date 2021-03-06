import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUserData } from './interfaces/userData';

@Injectable()
export class AuthService {

  localStorage = localStorage;

  constructor(public http: HttpClient) { }

  public hasUser(): boolean {
    if (this.localStorage.getItem('userId')) {
      return true;
    } else {
      return false;
    }
  }

  public getUserId(): string {
    if (this.localStorage.getItem('userId')) {
      return JSON.stringify(this.localStorage.getItem('userId'))
    } else {
      return 'Invalid user id';
    }
  }

  public clearStorage(): void {
    this.localStorage.clear();
  }

  public getAccessToken(): string {
    if (this.localStorage.getItem('accessToken')) {
      return JSON.stringify(this.localStorage.getItem('accessToken'))
    } else {
      return 'Invalid access Token';
    }
  }

  public register(body: IUserData): Observable<any> {
    return this.http.post(environment.apiUrl + '/users', body, { headers: environment.requestHeaders });
  }
  public login(body: any): Observable<any> {
    return this.http.get(environment.apiUrl + '/login' + `?username=${body.username}&password=${body.password}`, { headers: environment.requestHeaders });
  }
  public logout(): void {
    this.localStorage.clear();
  }

  public postContact(data: any): Observable<any> {
    return this.http.post(environment.apiUrl + '/classes/Contacts', data, { headers: environment.requestHeaders })
  }

  public getContacts(): Observable<any> {
    return this.http.get(environment.apiUrl + '/classes/Contacts', { headers: environment.requestHeaders })
  }

  public deleteContact(contactId: string): Observable<any> {
    return this.http.delete(environment.apiUrl + '/classes/Contacts/' + contactId, { headers: environment.requestHeaders })
  }
}
