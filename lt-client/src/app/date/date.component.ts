import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.less']
})
export class DateComponent implements OnInit {
  date:any | undefined;
  constructor(){
    setInterval(() =>{
      const currentDate = new Date();
      this.date = currentDate.toLocaleDateString('cs-CZ', { });
    }, 1000);
  }
  ngOnInit(): void {
  }


}
