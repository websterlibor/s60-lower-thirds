import { Component, OnInit } from '@angular/core';
import {LtService} from "../lt.service";

@Component({
  selector: 'app-lt-key',
  templateUrl: './lt-key.component.html',
  styleUrls: ['./lt-key.component.less']
})
export class LtKeyComponent {
  constructor(public ltService: LtService,) {
    this.ltService.subscribeToPublic().subscribe(data => {
      this.ltService.publicData = data;
    });
  }
}
