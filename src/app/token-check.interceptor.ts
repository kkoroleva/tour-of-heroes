import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { Router } from '@angular/router';
import { AuthorisationService } from "./authorization/authorization.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private router: Router, private auth: AuthorisationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = btoa(['HelloWb', 'admin'].join(':'));
    const tokenReq = req.clone({
      headers: req.headers.set('Session', `${new Date().getMilliseconds()}`)
        .set('Pragma', 'no-cache')
        .set('Authorization', `Basic ${auth}`),
    });

    return next.handle(tokenReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse)
            console.log(`Server response header ${tokenReq.headers.getAll('Authorization')}`);
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401)
              console.log(`Unauthorized for ${tokenReq.headers.getAll('Authorization')}`);
              this.router.navigate(['registration']);
          }
        }
      )
    )
  }
}
