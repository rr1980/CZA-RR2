import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { FakeAuthHandler } from './fake-auth.handler';
import { FakeCitizenHandler } from './fake-citizen.handler';

const getData = (base64: string): any => {
   const decoded_base64 = atob(base64);
   // const escaped = escape(decoded_base64);
   // console.debug(decoded_base64);
   const value = decodeURIComponent(decoded_base64);
   const json = JSON.parse(value);                         
   return json;
}


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

   fakeAuthHandler: FakeAuthHandler = new FakeAuthHandler();
   fakeCitizenHandler: FakeCitizenHandler = new FakeCitizenHandler();

   constructor() {}

   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const { url, method, headers, body } = request;

      console.debug(url, method, headers, body );

      if(url.toLowerCase().startsWith('http://172.20.1.156:48080')){
         return next.handle(request);
      }

      const bodyDe = getData(body);
      const self = this;

      // tslint:disable-next-line: deprecation
      return of(null)
         .pipe(mergeMap(handleRoute))
         .pipe(materialize()) 
         .pipe(delay(500))
         .pipe(dematerialize());

      function handleRoute(): Observable<HttpEvent<any>> {
         // console.log('intercept', bodyDe);
         console.debug(bodyDe);
         if(!bodyDe.task){
            return next.handle(request);
         }

         switch (true) {
            case bodyDe.task.endsWith('SYS/login'):
               return self.fakeAuthHandler.handle(request, bodyDe);
            case bodyDe.task.endsWith('SYS/citizen'):
               return self.fakeCitizenHandler.handle(request, bodyDe);
            default:
               return next.handle(request);
         }
      }
     
   }
}

// tslint:disable-next-line: member-ordering
export const fakeBackendProvider = {
   // use fake backend in place of Http service for backend-less development
   provide: HTTP_INTERCEPTORS,
   useClass: FakeBackendInterceptor,
   multi: true
};




// function ok(bodyData?) {
//    // tslint:disable-next-line: deprecation
//    return of(new HttpResponse({ status: 200, body: bodyData }));
// }

// function unauthorized() {
//    return throwError({ status: 401, error: { message: 'Unauthorised' } });
// }

// function error(message) {
//    return throwError({ error: { message } });
// }

// function isLoggedIn() {
//    return headers.get('Authorization') === 'Bearer fake-jwt-token';
// }

// function idFromUrl() {
//    const urlParts = url.split('/');
//    // tslint:disable-next-line: radix
//    return parseInt(urlParts[urlParts.length - 1]);
// }