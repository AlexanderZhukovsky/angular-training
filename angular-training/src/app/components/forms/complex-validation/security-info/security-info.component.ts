import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export function PasswordValidation(group: FormGroup) {
    const passwordValue = group.get('password').value;
    const confirmPasswordValue = group.get('confirmPassword').value;

    if (passwordValue !== confirmPasswordValue) {
        group.get('confirmPassword').setErrors({ matchPassword: true });
    } else {
        group.get('confirmPassword').setErrors(null);
    }
}

@Component({
    selector: 'security-info',
    templateUrl: './security-info.component.html',
    styleUrls: ['../complex-validation.component.css']
})

export class SecurityInfoComponent implements OnInit {

    @Input() parentFormGroup: FormGroup;

    public currentForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        /** Create current form */
        this.currentForm = this.formBuilder.group({
            login: this.formBuilder.control('', Validators.required),

            /** Create form group with validation on whole group */
            passwordGroup: this.formBuilder.group({
                password: this.formBuilder.control('', Validators.required),
                confirmPassword: this.formBuilder.control('', Validators.required)
            }, { validator: PasswordValidation })
        });
    }

    ngOnInit() {
        /** Add to current form to parent form */
        this.parentFormGroup.addControl('securityInfo', this.currentForm);
    }

    public getControl(controlName) {
        return this.currentForm.get(controlName);
    }

    public isControlInvalid(controlName: string): boolean {
        const control = this.currentForm.get(controlName);
        const result = control.invalid && control.touched;
        return result;
    }
}