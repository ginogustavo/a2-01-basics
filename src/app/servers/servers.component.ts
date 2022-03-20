import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // by element
  // selector: '[app-servers]', // by attribute
  // selector: '.app-servers', // by class

  //Note: select by ID is not supported by Angular

  // templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
