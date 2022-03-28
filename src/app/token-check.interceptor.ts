import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";
//import { tap } from "rxjs";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() { }

  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(`Previous header ${req.headers.get('Session')}`);
    const tokenReq = req.clone({
      headers: req.headers.set('Session', `${new Date().getMilliseconds()}`),
    });

    return next.handle(tokenReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse)
            console.log(`Server response header ${tokenReq.headers.get('Session')}`);
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401)
              console.log(`Unauthorized for ${tokenReq.headers.get('Session')}`)
          }
        }
      )
    )
  }
}
