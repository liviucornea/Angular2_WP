import { Component } from '@angular/core';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.html',
//template : require('./dashboard.html'),
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
title = `Angular 2.1 App with Webpack by Liviu Cornea !`;

Items = [1,2,3,4];


 }