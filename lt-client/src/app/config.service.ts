import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LtConfig} from "./lt-config";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  static config: LtConfig;

  constructor(private http: HttpClient) {}

  load() {

    const jsonFile = 'assets/config.json';

    return new Promise<void>(async (resolve, reject) => {
      try {
        const result$ = this.http.get<any>(jsonFile, {responseType: 'json'});
        ConfigService.config = await lastValueFrom(result$);

        console.log('Config Loaded');
        console.log(ConfigService.config);
        resolve();
      } catch (e) {
        reject(`Could not load the config file`);
      }

    });
  }
}
