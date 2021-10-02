import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //  selector: '[app-servers]', //this syntax is to select by attribute
  // selector: '.app-servers', //select by class
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
