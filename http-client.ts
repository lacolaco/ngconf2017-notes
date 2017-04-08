import {
    HttpClientModule,
    HTTP_INTERCEPTORS,
    HttpClient,
    HttpRequest,
    HttpHandler,
    HttpResponse,
    HttpObserve,
    HttpResponseType,
    HttpProgressEvent
} from '@angular/http';
import { Observable } from 'rxjs';

export function myInterceptor(req: HttpRequest, next: HttpHandler): Observable<HttpResponse> {
    // onRequest
    return next.handle(req).map(resp => {
        // on Response
        return resp;
    }).catch(err => {
        // onError
        return Observable.of(err);
    });
}

@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useValue: myInterceptor, multi: true },
    ]
})
export class AppModule { }

class MyComp {
    constructor(private client: HttpClient) { }

    someFn() {
        this.client.get("/data").subscribe(resp => {
            // 200 
        }, err => {
            // 400
            // no connection
        });
    }

    someFnWithProgress() {
        const resp$ = this.client.get("/large_file", { observe: HttpObserve.Events, responseType: 'json' });
        resp$.filter(event => event instanceof HttpProgressEvent).subscribe(progress => {
            progress.loaded;
            progress.total;
        })
        resp$.filter(event => event instanceof HttpResponse).subscribe(body => {

        })
    }
}

import { MockBackendConfig } from '@angular/http/testing';

let config: MockBackendConfig;
let someService: any;

it('called /foo once', () => {
    config.answer('/foo').with([
        { status: 200, body: 'Hi', expects: { method: 'GET' } },
    ]);
    someService.callHttp();
    config.verify();
});
