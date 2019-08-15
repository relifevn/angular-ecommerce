import { Component } from '@angular/core';
import { timer, interval } from 'rxjs';
import { takeWhile, map, repeat, first, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular';

  timeStep = 1000;
  begin: number;

  constructor() {
    interval(this.timeStep).pipe(
      // takeUntil()
    )
    .subscribe(res => {
      const now = Date.now();
      this.timeStep = this.timeStep + 1000;
      if (this.begin) {
        console.log((now - this.begin) / 1000, res);
        this.begin = now;
      } else {
        this.begin = now;
      }
    });
  }

}
