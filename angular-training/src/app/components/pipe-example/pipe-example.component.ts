import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FlyingHeroesPipe } from './flying-heros.pipe';

@Component({
    selector: 'app-pipe-example',
    templateUrl: './pipe-example.component.html',
    styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {
    public money = 500000;

    public birthDay = new Date();
    public toggle = true;
    get format() { return this.toggle ? 'shortDate' : 'fullDate'; }

    toggleFormat() { this.toggle = !this.toggle; }


    public heroes = [
        {
            name: 'BatMan',
            canFly: false
        },
        {
            name: 'SuperMan',
            canFly: true
        },
        {
            name: 'SpiderMan',
            canFly: false
        },
        {
            name: 'Thor',
            canFly: true
        }
    ];

    public heroes$ = of(this.heroes);

    ngOnInit() {
        const filterPipe = new FlyingHeroesPipe();
        const filteredArray = filterPipe.transform(this.heroes);
        console.log(filteredArray);
    }

}
