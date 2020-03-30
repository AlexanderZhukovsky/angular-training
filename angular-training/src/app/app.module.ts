import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AddressesComponent } from './components/forms/complex-form/addresses.component';
import { ComplexFormComponent } from './components/forms/complex-form/complex-form.component';
import { ComplexValidationComponent } from './components/forms/complex-validation/complex-validation.component';
import { PersonalInfoComponent } from './components/forms/complex-validation/personal-info/personal-info.component';
import { SecurityInfoComponent } from './components/forms/complex-validation/security-info/security-info.component';
import { DataManipulationAddressesComponent } from './components/forms/data-manipulation/addresses.component';
import { DataManipulationComponent } from './components/forms/data-manipulation/data-manipulation.component';
import { SimpleFormElementsComponent } from './components/forms/simple-form-elements/simple-form-elements.component';
import { SimpleValidationComponent } from './components/forms/simple-validation/simple-validation.component';

import { ChildComponent } from './components/child/child.component';
import { TestComponent } from './components/service-connection-component/test.component';
import { CommunicationService } from './services/communication.service';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrettyJsonModule } from 'angular2-prettyjson';

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        TestComponent,
        SimpleFormElementsComponent,
        SimpleValidationComponent,
        ComplexFormComponent,
        AddressesComponent,
        ComplexValidationComponent,
        SecurityInfoComponent,
        PersonalInfoComponent,
        DataManipulationComponent,
        DataManipulationAddressesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        PrettyJsonModule,
    ],
    providers: [CommunicationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
