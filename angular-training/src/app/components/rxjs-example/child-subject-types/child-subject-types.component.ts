import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
    selector: 'app-child-subject-types',
    templateUrl: './child-subject-types.component.html',
    styleUrls: ['./child-subject-types.component.scss']
})
export class ChildSubjectTypesComponent implements OnInit {
    @Input() observable$: Observable<any>;

    private componentActive = true;

    public childFormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl('')
    });

    constructor() { }

    ngOnInit() {
        this.observable$
            .pipe(takeWhile(() => this.componentActive))
            .subscribe(value => {
                this.childFormGroup.patchValue(value);
                console.log('Child Subject Types component Updated');
            });
    }

    ngOnDestroy() {
        this.componentActive = false;
    }

}
