import '../../rxjs-operators';
import { Observable }       from 'rxjs/Observable';
import { Component , ElementRef, ViewChild} from '@angular/core';
import {resolve} from 'url';

@Component({
  selector: 'rxJs-examples',

template : require('./updateingData.html'),
styleUrls: ['./updatingData.css']
})
export class UpdatingDataComponent {
        outputData = "experiment";
@ViewChild('stop') stop: ElementRef;
        ngOnInit(){
              // const startButton = document.querySelector('#start');
              const startButton = this.elementRef.nativeElement.querySelector('#start');
              // const stopButton = document.querySelector('#stop');
              const stopButton  = this.stop;
                const start$ = Observable.fromEvent(startButton, 'click');
                const interval$ = Observable.interval(500);
                const stop$ = Observable.fromEvent(this.stop.nativeElement, 'click');

                const intervalThatStops$ = interval$
                    .takeUntil(stop$);
                const data = {count:0};
                start$
                    .switchMapTo(intervalThatStops$)
                    .scan((acc)=> {
                      return {count: acc.count + 1}
                    }, data)
                    .subscribe((x)=> this.outputData = x.count.toString());
            }

        constructor(private elementRef: ElementRef){ }

 }