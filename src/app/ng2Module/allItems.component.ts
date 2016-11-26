import { Component } from '@angular/core';

@Component({
selector: 'all-items',
template : require('./allItems.html'),
styleUrls: ['./allItems.component.css']
})
export class AllItemsComponent {
title = `Angular 2.1 items are presented here!`;

 }