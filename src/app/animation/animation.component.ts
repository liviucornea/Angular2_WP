import {Component, trigger, state, style, transition, animate,  keyframes} from "@angular/core";
@Component({
    selector: 'app',
    animations:[
        trigger('signal', [
            state('void', style({
                'transform':'translateY(-100%)'
            })),
            state('go', style({
                'background-color':'green',
                'height':'100px'
            })),
            state('stop', style({
                'background-color':'red',
                'height':'50px'
            })),
            transition('void <=> *', animate(1000, keyframes([
                style({'transform':'scale(0)'}),
                style({'transform':'scale(.9)'}),
                style({'transform':'scale(.1)'}),
                style({'transform':'scale(.9)'}),
                style({'transform':'scale(.5)'}),
                style({'transform':'scale(1)'})
            ]))),
            transition('go <=> stop', animate('2s 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'))
        ])
    ],
    styleUrls: ['./animation.component.css'],
    templateUrl: './animation.html'
    
})
export class AnimationComponent {
    signal: any;
    isHere: boolean = true;
    onGoClick(){
        this.isHere = true;
        this.signal = 'go';
    }

    onStopClick(){
        this.isHere = true;
        this.signal = 'stop';
    }

    onToggleClick(){
        this.isHere = !this.isHere;
    }
}