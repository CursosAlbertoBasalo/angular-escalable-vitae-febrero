import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiStatusStoreService } from '@vitae/data';
import { Observable, of, throwError } from 'rxjs';
import {
  catchError,
  concatMap,
  delay,
  map,
  retryWhen,
  tap,
} from 'rxjs/operators';

const RETRY_MAX = 3;
const DELAYED_RETRY_MS = 3000;

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private apiStatus: ApiStatusStoreService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.apiStatus.state = { isLoading: true, errorMessage: null };

    return next.handle(request).pipe(
      tap((event) => this.auditResponse(event)),
      retryWhen((error$) => this.serverErrorLimited(error$)),
      map((event: HttpResponse<any>) => this.transformResponse(event)),
      catchError((error) => this.onError(error))
    );
  }
  transformResponse(event: HttpResponse<any>) {
    if (event instanceof HttpResponse) {
      if (event.url.includes('mode=list')) {
        return event.clone({ body: event.body['results'] || [] });
      }
    }
    return event;
  }

  serverErrorLimited(error$: Observable<HttpErrorResponse>) {
    return error$.pipe(
      concatMap((error, count) =>
        this.canRetry(error, count) ? of(error) : throwError(error)
      ),
      delay(DELAYED_RETRY_MS)
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

  private canRetry(error: HttpErrorResponse, count: number) {
    return (error.status == 0 || error.status >= 500) && count < RETRY_MAX;
  }
}
