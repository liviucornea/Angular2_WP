import { Component } from '@angular/core';

@Component({
  selector: 'all-items',
  //templateUrl: './dashboard.html',
template : require('./allItems.html'),
styleUrls: ['./allItems.component.css']
})
export class AllItemsComponent {
title = `Angular 2.1 to items are presented here!`;

 }