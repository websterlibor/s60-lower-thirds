import { Injectable } from '@angular/core';
import { environment} from "../environments/environment";
import { HttpClient, HttpClientJsonpModule,HttpErrorResponse } from "@angular/common/http";
import {lastValueFrom, Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public backendUrl = environment.backendUrl;

  constructor(private http: HttpClient) { }


  async aPost(path: string, data: any, options = null) {
    const result$ = this.http.post<any>(this.backendUrl + path, data, options ? options : {headers: {}});
    return await lastValueFrom(result$);
    //return this.http.post<any>(this.backendUrl + path, data, options ? options : {headers: {}}).toPromise();

  }


  async aPut(path: string, data: any, options = null) {
    const result$ = this.http.put<any>(this.backendUrl + path, data, options ? options : {headers: {}});
    return await lastValueFrom(result$);
    //return this.http.post<any>(this.backendUrl + path, data, options ? options : {headers: {}}).toPromise();

  }


  async aGet(path: string, data: any = null, options = null) {
    const result$ = this.http.get<any>(this.backendUrl + path, {responseType: 'json'});
    return await lastValueFrom(result$);
    //return this.http.post<any>(this.backendUrl + path, data, options ? options : {headers: {}}).toPromise();

  }

  async aDelete(path: string, data: any = null, options = null) {
    const result$ = this.http.delete<any>(this.backendUrl + path, {responseType: 'json'});
    return await lastValueFrom(result$);
    //return this.http.post<any>(this.backendUrl + path, data, options ? options : {headers: {}}).toPromise();

  }

  get(path: string): Observable<any> {
    return this.http.get(this.backendUrl + path, {responseType: 'json'});
  };
}
