import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: 'practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  display = false;
  log: Date[] = [];

  handleClick() {
    this.display = !this.display;
    this.log.push(new Date());
  }
}
