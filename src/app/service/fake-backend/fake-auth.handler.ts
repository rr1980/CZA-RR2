import { HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';


export class FakeAuthHandler {

    handle(request: HttpRequest<any>, bodyDe: any): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        return this.authenticate(bodyDe);
    }

    authenticate(bodyDe): Observable<HttpEvent<any>> {
        const req = JSON.parse(bodyDe.data);
        console.log('authenticate', req);

        if (req.hasOwnProperty('requestToken')) {
            if (req.requestToken === 'rr1980') {
                return this.ok(btoa('{"status":"Ok","data":"Test"}'));
            }
            else {
                return this.unauthorized();
            }
        }
        else if (req.hasOwnProperty('authToken')) {
            return this.ok(btoa('{"status":"Ok","data":"true"}'));
        }

    }

    ok(bodyData?) {
        // tslint:disable-next-line: deprecation
        return of(new HttpResponse({ status: 200, body: bodyData }));
    }

    unauthorized() {
        return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }
}