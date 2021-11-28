import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.less']
})
export class ClockComponent implements OnInit {
  date:any | undefined;
  constructor(){
    setInterval(() =>{
      const currentDate = new Date();
      this.date = currentDate.toLocaleTimeString('cs-CZ', { hour12: false });
    }, 1000);
  }
  ngOnInit(): void {
  }

}
