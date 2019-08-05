import { Injectable, Injector } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from '../../../environments/environment';
import { StorageService } from "../services/storage.service";

@Injectable({
  providedIn: "root"
})
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig = {
      "Content-Type": "application/vnd.evotor.v2+json",
      "Accept": "application/vnd.evotor.v2+json"
    };

    const tokenService = this.injector.get(StorageService);
    const token = tokenService.getItem(environment.token_key);

    if (token) {
      headersConfig["Authorization"] = token;
    }

    const request = req.clone({
      setHeaders: headersConfig
    });

    return next.handle(request);
  }
}
