import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TokenService {
  private token: string = "app-token";

  getToken(): string {
    return sessionStorage.getItem(this.token);
  }

  setToken(token: string): void {
    sessionStorage.setItem(this.token, token);
  }

  destroyToken() {
    sessionStorage.removeItem(this.token);
  }
}
