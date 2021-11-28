import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {LtService} from "../lt.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-lt-preview',
  templateUrl: './lt-preview.component.html',
  styleUrls: ['./lt-preview.component.less'],
})
export class LtPreviewComponent implements OnInit {

  constructor(public ltService: LtService,) {
    this.ltService.subscribeToPreview().subscribe(data => {
      this.ltService.previewData = data;
    });
  }

  ngOnInit(): void {
  }


}
