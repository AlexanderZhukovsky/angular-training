import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DataManipulationService } from './data-manipulation.service';
import { Subject, Observable } from 'rxjs';

@Component({
    selector: 'app-data-manipulation',
    templateUrl: './data-manipulation.component.html',
    providers: [DataManipulationService]
})

export class DataManipulationComponent implements OnInit {

    public userForm: FormGroup;
    public addresses: any[];

    public submittedData: any;
    public submittedRawData: any;

    private initialData: any;

    private userInfoSubj = new Subject<any>();

    constructor(private formBuilder: FormBuilder, private dmService: DataManipulationService) {
        /** Create user form */
        this.userForm = this.formBuilder.group({
            nickname: this.formBuilder.control(''),
            personalInfo: this.formBuilder.group({
                name: this.formBuilder.control(''),
                age: this.formBuilder.control('')
            })
        });
    }

    ngOnInit() {
        /** Server request emulation  */
        this.dmService.getUserInfo()
            .then(userInfo => {
                this.initialData = userInfo;

                // RXJS exmpl.
                this.userInfoSubj.next(userInfo);

                this.userForm.patchValue(userInfo);
            });
    }

    /** Disable name control */
    public onDisableClicked(nameControl: FormControl) {
        nameControl.disable();
    }

    /** Enable name control */
    public onEnableClicked(nameControl: FormControl) {
        nameControl.enable();
    }

    /** Reset form values */
    public onResetClicked() {
        this.userForm.reset(this.initialData);

        // RXJS exmpl.
        this.userInfoSubj.next(this.initialData);
    }

    // RXJS exmpl.
    public get userInfo() {
        return this.userInfoSubj.asObservable();
    }



    // Functions exmpl.
    // private formControl: FormControl;
    // private formGroup: FormGroup;
    // private formArray: FormArray;

    // private functions() {
    //     this.formControl.valueChanges.subscribe((value: any) => { })
    //     this.formControl.registerOnDisabledChange((isDisabled: boolean) => { })
    //     this.formControl.markAsTouched()
    //     this.formControl.markAsUntouched()
    //     this.formControl.markAsDirty()
    //     this.formControl.markAsPristine()
    //     this.formControl.hasError('required')

    //     this.formGroup.addControl('name', this.formControl)
    //     this.formGroup.removeControl('name')
    //     this.formGroup.setControl('name', this.formControl) // Replace an existing control
    //     this.formGroup.contains('name') // Check whether there is an enabled control with the given name in the group.


    //     this.formArray.at(10) // Return control from current index
    //     this.formArray.push(this.formControl)
    //     this.formArray.insert(3, this.formControl)
    //     this.formArray.removeAt(3)
    // }
}