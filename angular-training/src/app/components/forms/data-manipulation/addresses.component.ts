import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

export class Address {
    country: string = '';
    city: string = '';
    addressLine: string = '';
}

@Component({
    selector: 'dm-addresses-component',
    templateUrl: './addresses.component.html'
})

export class DataManipulationAddressesComponent implements OnInit  {

    @Input() parentFormGroup: FormGroup;

    // RXJS exmpl.
    @Input() data$: Observable<any>;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.parentFormGroup.addControl('addresses', new FormArray( [this.initAddressFormGroup()] ));

        // RXJS exmpl.
        this.data$.subscribe(userInfo => { this.setupControlValues(userInfo.addresses); });
    }

    public initAddressFormGroup() {
        return this.formBuilder.group(new Address());
    }

    public addAddress() {
        let addresses = this.parentFormGroup.get('addresses') as FormArray;
        addresses.push(this.initAddressFormGroup());
    }

    // // RXJS exmpl.
    private setupControlValues(data: Address[]) {
        let addressesFormArray = this.parentFormGroup.get('addresses') as FormArray;

        while(addressesFormArray.controls.length > data.length) {
            addressesFormArray.removeAt(addressesFormArray.controls.length - 1);
        }

        while(addressesFormArray.controls.length < data.length) {
            this.addAddress();
        }

        addressesFormArray.patchValue(data);
    }
}