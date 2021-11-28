import { Injectable } from '@angular/core';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
//import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  public setItem(name: string, value: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(name, value);
    }
  }


  public getItem(name: string) {

    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(name);
    } else {
      return null;
    }
  }

  public clear() {

    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    }
  }
}
