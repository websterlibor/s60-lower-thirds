import { Injectable } from '@angular/core';
import { Socket,  } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import {Observable} from "rxjs";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class LtService {
  public previewData: any = {};
  public publicData: any = {};

  constructor(private socket: Socket,
              public restService: RestService,) {
  }

  public subscribeToPreview() {

    return new Observable((observer) => {
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
