import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-lt-entry-page',
  templateUrl: './lt-entry-page.component.html',
  styleUrls: ['./lt-entry-page.component.less']
})
export class LtEntryPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  getLocationHref() {
    return window.location.href;
  }

}
