import {Component, Input, OnInit} from '@angular/core';
import {Lt} from "../lt";
import {LtLine} from "../lt-line";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lt-composer-line',
  templateUrl: './lt-composer-line.component.html',
  styleUrls: ['./lt-composer-line.component.less']
})
export class LtComposerLineComponent implements OnInit {
  @Input() public data: LtLine | undefined;

  constructor() {
    if(!this.data) {
      this.data = new LtLine();
    }
  }

  ngOnInit(): void {
  }

}
