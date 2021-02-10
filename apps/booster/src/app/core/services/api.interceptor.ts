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
import { ApiStatusStoreService } from './api-status-store.service';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private apiStatus: ApiStatusStoreService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // this.apiStatus.state = { isLoading: true, errorMessage: null };
    return next.handle(request).pipe(
      tap((event) => this.auditResponse(event)),
      catchError((err) => this.onError(err))
    );
  }

  auditResponse(event) {
    if (event instanceof HttpResponse) {
      console.log(event);
      this.apiStatus.state = { isLoading: false, errorMessage: null };
    }
  }

  onError(err: HttpErrorResponse) {
    console.error(`${err.status} : ${err.message}`);
    this.apiStatus.state = { isLoading: false, errorMessage: err.message };
    return throwError(err);
  }
}
