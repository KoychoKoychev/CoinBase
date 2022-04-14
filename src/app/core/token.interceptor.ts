import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!request.url.includes(environment.priceApiUrl)) {
      if (this.authService.getAccessToken() !== 'Invalid access Token') {
        request = request.clone({
          setHeaders: {
            'X-Parse-Session-Token': JSON.parse(this.authService.getAccessToken())
          }
        })
      }
    }

    return next.handle(request);
  }
}
