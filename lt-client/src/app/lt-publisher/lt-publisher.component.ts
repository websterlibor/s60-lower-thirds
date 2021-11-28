import { Component, OnInit } from '@angular/core';
import {LtService} from "../lt.service";

@Component({
  selector: 'app-lt-publisher',
  templateUrl: './lt-publisher.component.html',
  styleUrls: ['./lt-publisher.component.less']
})
export class LtPublisherComponent {
  constructor(public ltService: LtService,) {
    this.ltService.subscribeToPublic().subscribe(data => {
      this.ltService.publicData = data;
    });
  }

}
