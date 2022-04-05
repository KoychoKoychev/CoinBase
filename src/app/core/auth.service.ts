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

  public register(body: IUserData): Observable<any> {
    return this.http.post(environment.apiUrl + '/users', body, { headers: environment.requestHeaders });
  }
  public login(body: any): Observable<any> {
    return this.http.get(environment.apiUrl + '/login' + `?username=${body.username}&password=${body.password}`, { headers: environment.requestHeaders });
  }
  public logout():void{
    this.localStorage.clear();
  }

  public postContact(): Observable<any> {
    return this.http.post("https://formsubmit.co/koicho3@gmail.com", 
    {"name":"testname", "email":"test@abv.bg", "text":"This is a test text"}
    )
  }
}
