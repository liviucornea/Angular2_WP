import { Component, Input, Output } from '@angular/core';
@Component({
  selector: 'card',
  styles: [require('../allItems.component.css')],
  templateUrl: 'card.component.html',
})
export class CardComponent {
    @Input() header: string = 'this is header';   
    @Input() footer: string = 'this is footer';
}