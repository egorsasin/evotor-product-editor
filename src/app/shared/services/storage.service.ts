import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StorageService {

  getItem(key: string): string {
    return sessionStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  destroyItem(key: string) {
    sessionStorage.removeItem(key);
  }
}
