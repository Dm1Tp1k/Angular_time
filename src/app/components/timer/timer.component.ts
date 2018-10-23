import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  
  public second;
  public hour;
  public minute;
  public myDate: Date;
  public fakeArrayH = new Array(6);
  public fakeArrayM = new Array(30);

  constructor() { }


  ngAfterContentInit() {
    setInterval(() => {

      this.myDate = new Date();
      const seconds = new Date().getSeconds();
      const sdegree = seconds * 6;
      const srotate = 'rotate(' + sdegree + 'deg)';

      this.second = {
        '-moz-transform' : srotate, 
        '-webkit-transform' : srotate, 
        '-o-transform' : srotate
      };

      const hours = new Date().getHours();
      const mins = new Date().getMinutes();
      const hdegree = hours * 30 + (mins / 2);
      const hrotate = 'rotate(' + hdegree + 'deg)';

      this.hour = {
        '-moz-transform' : hrotate, 
        '-webkit-transform' : hrotate, 
        '-o-transform' : hrotate
      }

      const mdegree = mins * 6;
      const mrotate = 'rotate(' + mdegree + 'deg)';

      this.minute = {
        '-moz-transform' : mrotate, 
        '-webkit-transform' : mrotate, 
        '-o-transform' : mrotate
      };

    }, 1000 );

  }

  ngOnInit() {
  }


}
