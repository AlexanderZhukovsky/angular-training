import { Component, OnInit } from '@angular/core';
import { Subject, Observable, Subscription, of, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';
import { takeWhile, map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-parent-obs-component',
    templateUrl: './parent-obs-component.component.html',
    styleUrls: ['./parent-obs-component.component.scss']
})

export class ParentObsComponentComponent implements OnInit {
    private clickCount: number = 1;

    private subj: Subject<number> = new Subject();
    public obs$ = this.subj.asObservable();


    private parentSubj: Subject<any> = new Subject();

    private behaviorSubj: BehaviorSubject<any> = new BehaviorSubject({ firstName: 'Petr', lastName: 'Ivanov' });
    private replySubj: ReplaySubject<any> = new ReplaySubject(4, 2000);
    private asyncSubj: AsyncSubject<any> = new AsyncSubject();

    constructor() { }

    private componentActive = true;

    ngOnInit() {
        this.subj.subscribe(
            value => console.log('Sbj subscription: ' + value),
            error => console.log('Sbj error: ' + error),
            () => console.log('Sbj complete!')
        );

        // How to create obs
        const observable1 = of([1, 2, 3, 4]);

        const observable2 = new Observable<number>(
            subscriber => {
                subscriber.next(1);
            }
        );


        observable2.subscribe(x => console.log('TEST: ' + x));
    }

    ngOnDestroy() {
        this.componentActive = false;
    }

    public onFilterAndMapClicked(): void {
        const data = of([
            {
                brand: 'porsche',
                model: '911'
            },
            {
                brand: 'porsche',
                model: 'macan'
            },
            {
                brand: 'ferarri',
                model: '458'
            },
            {
                brand: 'lamborghini',
                model: 'urus'
            }
        ]);

        data.pipe(
            map(cars => cars.map(car => `${car.brand} ${car.model}`))
        ).subscribe(cars => console.log(cars));

        data.pipe(
            map(cars => cars.filter(car => car.brand === 'porsche'))
        ).subscribe(cars => console.log(cars));
    }

    public onNextClick(): void {
        this.subj.next(this.clickCount++);
    }

    public onErrorClick(): void {
        this.subj.error('Some test error');
    }

    public onCompleteClick(): void {
        this.subj.complete()
    }




    public get parentObs$(): Observable<any> {
        return this.parentSubj.asObservable();
    }

    public onUpdateChildClick(): void {
        const count = this.clickCount++;
        this.parentSubj.next({ firstName: 'Vasya' + count, lastName: 'Pupkin' + count });
    }


    // sbj. types exmpl.
    public get behaviorObs$(): Observable<any> {
        return this.behaviorSubj.asObservable();

        // reply subj.
        // return this.replySubj.asObservable();

        // async subj.
        //return this.asyncSubj.asObservable();
    }

    // sbj. types exmpl.
    public onSubjTypesChangeClick(): void {
        const count = this.clickCount++;
        this.behaviorSubj.next({ firstName: 'Vasya' + count, lastName: 'Pupkin' + count });

        // reply subj.
        //this.replySubj.next({ firstName: 'Vasya' + count, lastName: 'Pupkin' + count });

        // async subj.
        //this.asyncSubj.next({ firstName: 'Vasya' + count, lastName: 'Pupkin' + count });
    }

    public onAsyncSubjComplete(): void {
        this.asyncSubj.complete();
    }
}
