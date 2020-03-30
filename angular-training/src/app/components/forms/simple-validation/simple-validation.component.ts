import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { SimpleValidationService } from './simple-validation.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'simple-validation',
    templateUrl: './simple-validation.component.html',
    providers: [SimpleValidationService]
})

export class SimpleValidationComponent implements OnInit {

    public userDetailsForm: FormGroup;

    constructor(private simpleValidationService: SimpleValidationService) {}

    ngOnInit() {
        this.userDetailsForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            nickName: new FormControl('Sz', Validators.minLength(4)),
            age: new FormControl(9, [Validators.min(10), Validators.max(12)]),
            email: new FormControl('some@', Validators.email, [this.emailAsyncValidator.bind(this)]),
            url: new FormControl('http://www.mail.ru', this.validateUrl)
        });
    }

    /** Async email validation */
    private emailAsyncValidator(control: FormControl): Observable<ValidationErrors> {
        return this.simpleValidationService.validateUniqueEmail(control.value);
    }

    /** Url custom validation */
    private validateUrl(control: AbstractControl): ValidationErrors {
        if (control.value && (!control.value.startsWith('https') || !control.value.includes('.com'))) {
            return { invalidUrl: true } as ValidationErrors;
        }
        return null;
    }

    public onSubmit() {
        const controls = this.userDetailsForm.controls;

        if (this.userDetailsForm.invalid) {
            Object.keys(controls)
                .forEach(controlName => controls[controlName].markAsTouched());
            return;
        }

        console.log(this.userDetailsForm.value);
    }

    /** Disable NickName control functionality */
    public onDisable() {
        this.getControl('nickName').disable();
    }

    /** Enable NickName control functionality */
    public onEnable() {
        this.getControl('nickName').enable();
    }

    /** Set validation on NickName control */
    public onSetValidation() {
        let nickNameControl = this.getControl('nickName');
        nickNameControl.setValidators(Validators.minLength(4));
        // nickNameControl.updateValueAndValidity();
    }

    public onRemoveValidation() {
        let nickNameControl = this.getControl('nickName');
        nickNameControl.clearValidators();

        /** Альтернативный вариант 
        nickNameControl.setValidators(Validators.nullValidator); */

        //nickNameControl.updateValueAndValidity();
    }

    public getControl(controlName) {
        return this.userDetailsForm.get(controlName);
    }

    public isControlInvalid(controlName: string): boolean {
        let control = this.userDetailsForm.controls[controlName];
        let result = control.invalid && control.touched;
        return result;
    }
}