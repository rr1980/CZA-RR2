import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { retry, map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ServerRequest } from './server-request';
import { ServerResponse } from './server-response';
import { Passcode, PasscodeResponse } from 'src/app/models/passcode.model';
import { Appointment, IAppointmentData, AppointmentFinishResponse } from 'src/app/models/appointment.model';

@Injectable()
export class ApiService {



    private static readonly URL_SERVICE_GET = 'isga-webstart/service/webclient/get';
    private static readonly URL_SERVICE_POST = 'isga-webstart/service/webclient/post';

    private static baseURL = null;
    private static urlGET = null;
    private static urlPOST = null;
    private static headers = new HttpHeaders({ 'Content-Type': 'text/plain' });
    private static options = { headers: ApiService.headers };

    constructor(private http: HttpClient) {
        if (ApiService.urlPOST === null) {
            if (environment.production === false) {
                ApiService.urlGET = environment.urlGET;
                ApiService.urlPOST = environment.urlPOST;
            }
            else if ((environment.production === true) && (ApiService.baseURL != null)) {
                ApiService.urlGET = ApiService.baseURL + ApiService.URL_SERVICE_GET;
                ApiService.urlPOST = ApiService.baseURL + ApiService.URL_SERVICE_POST;
            }
        }
    }

    citizen_passcode(passcodeFormData: Passcode): Observable<PasscodeResponse> {
        const data = JSON.stringify(passcodeFormData);
        const request = new ServerRequest('SYS/citizen', data);
        const serverResponse = this.perform(request)
            .pipe(
                map(r => {
                    return JSON.parse(r) as PasscodeResponse;
                }),
                catchError(this.errorHandler));

        return serverResponse as Observable<PasscodeResponse>;
    }

    citizen_availableAppointment(userId: number): Observable<Appointment[]> {
        const data = JSON.stringify({ userId: userId });
        const request = new ServerRequest('SYS/citizen', data);
        const serverResponse = this.perform(request)
            .pipe(
                map(r => {
                    return JSON.parse(r) as Appointment[];
                }),
                catchError(this.errorHandler));

        return serverResponse as Observable<Appointment[]>;
    }

    citizen_finish(IapointmentData: IAppointmentData): Observable<AppointmentFinishResponse> {
        const data = JSON.stringify(IapointmentData);
        const request = new ServerRequest('SYS/citizen', data);
        const serverResponse = this.perform(request)
            .pipe(
                map(r => {
                    return JSON.parse(r) as AppointmentFinishResponse[];
                }),
                catchError(this.errorHandler));

        return serverResponse as Observable<AppointmentFinishResponse>;
    }

    // privates

    private getData(base64: string): string {
        const decoded_base64 = atob(base64);
        // const escaped = escape(decoded_base64);
        // console.debug(decoded_base64);
        const value = decodeURIComponent(decoded_base64);
        const json = JSON.parse(value);
        const sr = ServerResponse.getInstance(json);
        const data = (sr != null) ? sr.data : null;
        return data;
    }


    private perform(object: any): Observable<string> {
        if (object instanceof ServerRequest) {
            // object.token = SecurityGuard.getToken();
        }

        const ojson = JSON.stringify(object);
        const body = btoa(ojson);

        const result = this.http.post<string>(`${ApiService.urlPOST}`, body, ApiService.options)
            .pipe(retry(3),
                map(base64 => this.getData(base64.toString())), // BASE64 (UTF-8) -> ... -> String
                catchError(this.errorHandler));
        return result;
    }

    private errorHandler(error: Error | any): Observable<any> {
        // tslint:disable-next-line: deprecation
        return throwError(error);
    }

    onTest() {
        const ojson = JSON.stringify({
            Test: 'Rene'
        });

        const body = btoa(ojson);

        const result = this.http.post<string>('http://172.20.1.156:48080/CZAppointment/service/webclient/simpleTest', body,
            {
                headers: new HttpHeaders
                    (
                        {
                            'Accept': 'application/json'
                        }
                    )
            }
            ).pipe(
                // retry(3),
                // map(base64 => this.getData(base64.toString())), // BASE64 (UTF-8) -> ... -> String
                catchError(this.errorHandler));

        result.subscribe((r) => {
            console.debug("=", r);
        });
    }
}