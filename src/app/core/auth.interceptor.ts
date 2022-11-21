import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PigesAuthService } from '@piges/auth-angular';

@Injectable()
export class PigesBackendInterceptor implements HttpInterceptor {
    constructor(
        private pigesAuthService: PigesAuthService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.prepareHeader(request)).pipe(
            switchMap(request => {
                return next.handle(request);
            })
        );
    }

    private async prepareHeader(request: HttpRequest<any>): Promise<HttpRequest<any>> {
		if (request.url.includes("https://api.piges.io/")) {
			return this.prepareHeaderAuthorized(request);
        } else {
            return request;
        }
    }

    private async prepareHeaderAuthorized(request: HttpRequest<any>): Promise<HttpRequest<any>> {
        const token = await this.pigesAuthService.getAccessToken();

        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token,
            }
        });

        return request;
    }

}
