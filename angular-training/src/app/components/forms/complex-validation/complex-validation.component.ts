import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export class Address {
    country = '';
    city = '';
    addressLine = '';
}

@Component({
    selector: 'app-complex-validation',
    templateUrl: './complex-validation.component.html',
    styleUrls: ['./complex-validation.component.css']
})

export class ComplexValidationComponent {

    userForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.userForm = this.formBuilder.group({});
    }

    public onSubmit() {
        if (this.userForm.invalid) {
            this.markFormGroupTouched();
            return;
        }
    }

    /** Function to mark as touched all controls in each formGroup and formArray */
    private markFormGroupTouched(formGroup: FormGroup = this.userForm) {
        (<any>Object).values(formGroup.controls).forEach(control => {
            control.markAsTouched();

            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
}