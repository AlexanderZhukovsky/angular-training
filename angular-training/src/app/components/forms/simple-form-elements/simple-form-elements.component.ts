import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
    selector: 'app-simple-elements',
    templateUrl: './simple-form-elements.component.html'
})

export class SimpleFormElementsComponent {
    constructor(private formBuilder: FormBuilder) { }

    // FormControls
    name = new FormControl();
    age = new FormControl({ value: '' });
    gender = new FormControl();
    isSubscribe = new FormControl();

    // FormControl with Prepopulated value and disable state
    prepopName = new FormControl({ value: 'Vasya', disabled: true });

    // FormGroup with 2 controls
    passwordGroup = new FormGroup({
        password: new FormControl(),
        repeatPassword: new FormControl('1234')
    });

    // FormGroup based on class;
    userFormGroup = this.formBuilder.group({
        name: 'abc',
        userName: 'aaa',
        email: 'bcbc'
    });

    // Form Group with another Form Group
    parentFormGroup = new FormGroup({
        childControl1: new FormControl('child control 1'),

        childFormGroup: new FormGroup({
            childControl2: new FormControl('child control 2')
        })
    });

    // FormArray
    addressesFormGroup = new FormGroup({
        cities: new FormArray([
            new FormControl('SF'),
            new FormControl('NY')
        ])
    });

    // Cities formArray getter
    get citiesGetter(): FormArray {
        return this.addressesFormGroup.get('cities') as FormArray;
    }

    onButtonClick() {
        // Get control by name from FormGroup
        const passwordControl = this.passwordGroup.get('password');

        // Get control by name from child form group
        const childControl2 = this.parentFormGroup.get('childFormGroup.childControl2');

        // Get control by index from FormArray
        const firstCityControl = this.addressesFormGroup.get('cities.0');

        // (this.addressesFormGroup.controls.cities as FormArray).controls[0];
    }
}
