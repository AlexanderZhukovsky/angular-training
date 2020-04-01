import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ValidationErrors } from '@angular/forms';

export function EmailsEqualValidation(array: FormArray): ValidationErrors | null {
    const emailsHashSet = new Set();
    const values = array.value;

    for (let i = 0; i < values.length; i++) {
        if (emailsHashSet.has(values[i]))
            return { equalExist: true }
        else if (values[i] != '')
            emailsHashSet.add(values[i]);
    };

    return null;
}

@Component({
    selector: 'personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['../complex-validation.component.css']
})

export class PersonalInfoComponent {

    @Input() parentFormGroup: FormGroup;

    public currentForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        /** Create current form */
        this.currentForm = this.formBuilder.group({
            name: this.formBuilder.control('', Validators.required),
            emails: this.formBuilder.array([this.initEmailFormControl()], EmailsEqualValidation)
        });
    }

    ngOnInit() {
        /** Add to current form to parent form */
        this.parentFormGroup.addControl('personalInfo', this.currentForm);
    }

    /** Init control with empty value and validation array */
    public initEmailFormControl() {
        return this.formBuilder.control('', [Validators.required, Validators.email]);
    }

    public addEmail() {
        let emails = this.currentForm.get('emails') as FormArray;
        emails.push(this.initEmailFormControl());
    }

    public getControl(controlName) {
        return this.currentForm.get(controlName);
    }

    public isControlInvalid(controlName: string): boolean {
        let control = this.currentForm.get(controlName);
        let result = control.invalid && control.touched;
        return result;
    }
}