import { Component,  ElementRef } from '@angular/core';

@Component({
  selector: 'test-child',
  templateUrl: './test.child.html',

})
export class TestChildComponent {
title = `Test Child !`;

 constructor(private el: ElementRef ) { }

doClick(){
  let elem = this.el.nativeElement;
  alert ('You pressed the button')
}

 }