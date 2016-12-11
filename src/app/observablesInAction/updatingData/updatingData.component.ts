import '../../rxjs-operators';
import { Observable }       from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject'
import { Component , ElementRef, ViewChild} from '@angular/core';
import {resolve} from 'url';

@Component({
  selector: 'rxJs-examples',

template : require('./updateingData.html'),
styleUrls: ['./updatingData.css']
})
export class UpdatingDataComponent {
        outputData = "experiment";
        status = false;
@ViewChild('stop') stop: ElementRef;
        ngOnInit(){
              // const startButton = document.querySelector('#start');
              const startButton = this.elementRef.nativeElement.querySelector('#start');
              // const stopButton = document.querySelector('#stop');
              const stopButton  = this.stop;
                const start$ = Observable.fromEvent(startButton, 'click');
                const interval$ = Observable.interval(1000);
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
toggle(){
  this.status = !this.status;
  this.pauser.next(this.status);
}

// block bellow build pausable 
 source = Observable.interval(1000);
  pauser = new Subject();
   pausable = this.pauser.switchMap(paused => paused ? Observable.never() : this.source);
        constructor(private elementRef: ElementRef){
// All the magic is here
this.pausable.subscribe(x => this.outputData = x.toString());
this.pauser.next(true);
         }
 }