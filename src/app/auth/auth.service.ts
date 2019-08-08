import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, ReplaySubject, throwError } from "rxjs";
import { ApiService } from "../shared/services";
import { EvoStore } from "../evo-stores/models/evo-store";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  // behaviorSubject тот же Subject, но хранит значение последнего эмита...
  // Эмит устанавливаем при создании экземпляра. По умолчанию пустой объект пользователя
  private currentStoreSubject = new BehaviorSubject({});

  // преобразуем BehaviorSubject в Observable
  // необходимо запретить подписчикам добавлять данные в Subject...
  public currentStore = this.currentStoreSubject.asObservable();

  private isAuthenticatedApp = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedApp.asObservable();

  constructor(
    private apiService: ApiService,
    //private tokenService: TokenService
  ) {}

  //attemptAuth(token: string): Observable<any> {
    // this.tokenService.setToken(token);
    // return this.apiService.get("/stores/search").pipe(
    //   map((data: EvotorStore[]) => {
    //     this.setAuth(data);
    //   }),
    //   catchError(err => {
    //     this.purgeAuth();
    //     return throwError(err);
    //   })
    // );
  //}

  setAuth(data: EvoStore[]): void {
    // this.isAuthenticatedApp.next(true);
    // if (data.length) {
    //   const currentStore = this.currentStoreSubject.value as EvotorStore;
    //   const predicateStore = data.find(
    //     store => currentStore.uuid === store.uuid
    //   );
    //   if (predicateStore) {
    //     this.currentStoreSubject.next(predicateStore);
    //   } else {
    //     this.currentStoreSubject.next(data[0]);
    //   }
    // } else {
    //   this.currentStoreSubject.next({} as EvotorStore);
    // }
  }

  purgeAuth(): void {
    // this.tokenService.destroyToken();
    // this.currentStoreSubject.next({} as EvotorStore);
    // this.isAuthenticatedApp.next(false);
  }

  populate(): void {
    // if (this.tokenService.getToken()) {
    //   this.apiService
    //     .get("/stores/search")
    //     .subscribe(data => this.setAuth(data), err => this.purgeAuth());
    // } else {
    //   this.purgeAuth();
    // }
  }
}
