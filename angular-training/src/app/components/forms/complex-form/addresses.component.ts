import { Component, Input, OnInit, OnChanges, DoCheck } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

export class Address {
    country: string = '';
    city: string = '';
    addressLine: string = '';
}

@Component({
    selector: 'addresses-component',
    templateUrl: './addresses.component.html',
    styleUrls: ['./addresses.component.css']
})

export class AddressesComponent implements OnInit, OnChanges, DoCheck {

    @Input() parentFormGroup3: FormGroup;

    public parentFormGroup: FormGroup = new FormGroup({});;

    constructor(private formBuilder: FormBuilder) { }

    ngOnChanges() {
        console.log('ngOnChanges2');
    }

    ngDoCheck() {
        console.log('ngDoCheck2');
    }

    /** Add forrmArray with 'addresses' name to parent formGroup */
    ngOnInit() { 
        console.log('ngOnInit2');
        this.parentFormGroup.addControl('addresses', new FormArray( [this.initAddressFormGroup()] ));
    }

    /** Create new formGroup based on Address model */
    public initAddressFormGroup() {
        return this.formBuilder.group(new Address());
    }

    public addAddress() {
        let addresses = this.parentFormGroup.get('addresses') as FormArray;
        addresses.push(this.initAddressFormGroup() );

        /** Add control to current index 
        addresses.insert( index, this.initAddressFormGroup() );  */
    }
}
