import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = ''; // this.authStore.getTokenSnapshot();
    const authorization = 'Bearer ' + token;
    request = request.clone({
      setHeaders: {
        Authorization: authorization,
      },
    });
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if ([401, 403].includes(err.status)) {
          console.log(err);
          // this.authStore.saveNoCredentials();
        }
        return throwError(err);
      })
    );
  }
}
