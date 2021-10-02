import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: 'practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  display = false;
  log: number[] = [];

  handleClick() {
    this.display = !this.display;
    this.log.push(this.log.length + 1);
  }
}
