import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'complex-form',
    templateUrl: './complex-form.component.html',
    styleUrls: ['./complex-form.component.css']
})

export class ComplexFormComponent implements OnInit, OnChanges, DoCheck {

    userForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnChanges() {
        console.log('ngOnChanges1');
    }

    ngDoCheck() {
        console.log('ngDoCheck1');
    }

    ngOnInit() {
        console.log('ngOnInit1');
        /** Note: there is no Addresses array */
        this.userForm = this.formBuilder.group({
            nickname: this.formBuilder.control(''),
            
            personalInfo: this.formBuilder.group({
                name: this.formBuilder.control(''),
                age: this.formBuilder.control('')
            })
        });
    }
}