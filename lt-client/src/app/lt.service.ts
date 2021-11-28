import { Injectable } from '@angular/core';
import { Socket,  } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import {RestService} from "./rest.service";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class LtService {
  public previewData: any = {};
  public publicData: any = {};
  public socket: Socket | undefined;

  constructor(public restService: RestService,) {
    this.socket = new Socket({ url: ConfigService.config.backendUrl, options: {} })
  }

  public subscribeToPreview() {
    return new Observable((observer) => {
      // @ts-ignore
      this.socket.on('preview', function(data: any) {
        observer.next(data);
      });
    });
    //return this.socket.fromEvent('preview').pipe(map((data) => (<any>data).msg));
  }

  public sendToPreview(data: any) {
    this.restService.aPost('preview', data);
  }


  public subscribeToPublic() {
    return new Observable((observer) => {
      // @ts-ignore
      this.socket.on('public', function(data: any) {
        observer.next(data);
      });
    });

    //return this.socket.fromEvent('preview').pipe(map((data) => (<any>data).msg));
  }

  public sendToPublic(data: any) {
    this.restService.aPost('public', data);
  }


}
