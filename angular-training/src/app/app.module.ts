import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Forms components
import { AddressesComponent } from './components/forms/complex-form/addresses.component';
import { ComplexFormComponent } from './components/forms/complex-form/complex-form.component';
import { ComplexValidationComponent } from './components/forms/complex-validation/complex-validation.component';
import { PersonalInfoComponent } from './components/forms/complex-validation/personal-info/personal-info.component';
import { SecurityInfoComponent } from './components/forms/complex-validation/security-info/security-info.component';
import { DataManipulationAddressesComponent } from './components/forms/data-manipulation/addresses.component';
import { DataManipulationComponent } from './components/forms/data-manipulation/data-manipulation.component';
import { SimpleFormElementsComponent } from './components/forms/simple-form-elements/simple-form-elements.component';
import { SimpleValidationComponent } from './components/forms/simple-validation/simple-validation.component';

// Communication between components
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { TestComponent } from './components/service-connection-component/test.component';
import { CommunicationService } from './services/communication.service';

// Rxjs components
import { ChildObsComponentComponent } from './components/rxjs-example/child-obs-component/child-obs-component.component';
import { ParentObsComponentComponent } from './components/rxjs-example/parent-obs-component/parent-obs-component.component';
import { ChildSubjectTypesComponent } from './components/rxjs-example/child-subject-types/child-subject-types.component';

// Other libraries
import { PrettyJsonModule } from 'angular2-prettyjson';

// Pipes
import { ExponentialStrengthPipe } from './components/pipe-example/exponential-strength.pipe';
import { FlyingHeroesPipe } from './components/pipe-example/flying-heros.pipe';

//Routing example
import { SomeTestExampleModule } from './modules/routing-example/some-test-example.module';
import { PipeExampleComponent } from './components/pipe-example/pipe-example.component';

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
        DataManipulationAddressesComponent,
        ParentObsComponentComponent,
        ChildObsComponentComponent,
        ChildSubjectTypesComponent,
        PipeExampleComponent,
        ExponentialStrengthPipe,
        FlyingHeroesPipe
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        PrettyJsonModule,
        SomeTestExampleModule
    ],
    providers: [CommunicationService],
    bootstrap: [AppComponent]
})
export class AppModule { }
