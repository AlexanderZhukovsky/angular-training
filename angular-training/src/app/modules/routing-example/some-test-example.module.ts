import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ParentPageComponent } from './components/parent-page/parent-page.component';
import { FirstChildPageComponent } from './components/first-child-page/first-child-page.component';
import { SecondChildPageComponent } from './components/second-child-page/second-child-page.component';

import { SomeTestExampleRoutingModule } from './some-test-example-routing.module';

@NgModule({
    declarations: [
        FirstPageComponent,
        SecondPageComponent,
        ParentPageComponent,
        FirstChildPageComponent,
        SecondChildPageComponent
    ],
    imports: [
        CommonModule,
        SomeTestExampleRoutingModule
    ]
})
export class SomeTestExampleModule { }
