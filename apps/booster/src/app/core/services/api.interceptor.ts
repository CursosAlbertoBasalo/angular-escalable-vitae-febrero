import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap((event) => this.auditResponse(event)),
      catchError((err) => this.onError(err))
    );
  }

  auditResponse(event) {
    if (event instanceof HttpResponse) {
      console.log('event :', event);
    }
  }

  onError(err: HttpErrorResponse) {
    console.log(`${err.status} : ${err.message}`);

    return throwError(err);
  }
}
