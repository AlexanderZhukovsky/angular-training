import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'complex-form',
    templateUrl: './complex-form.component.html',
    styleUrls: ['./complex-form.component.css']
})

export class ComplexFormComponent implements OnInit {

    userForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        /** Note: there is no Address array */
        this.userForm = this.formBuilder.group({
            nickname: this.formBuilder.control(''),
            
            personalInfo: this.formBuilder.group({
                name: this.formBuilder.control(''),
                age: this.formBuilder.control('')
            })
        });
    }
}