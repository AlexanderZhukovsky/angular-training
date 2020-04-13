import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicLoadingRoutingModule } from './dynamic-loading-routing.module';

import { DynamicParentPageComponent } from './components/parent-page/parent-page.component';
import { DynamicFirstChildPageComponent } from './components/first-child-page/first-child-page.component';
import { DynamicSecondChildPageComponent } from './components/second-child-page/second-child-page.component';

@NgModule({
    declarations: [
        DynamicParentPageComponent,
        DynamicFirstChildPageComponent,
        DynamicSecondChildPageComponent
    ],
    imports: [
        CommonModule,
        DynamicLoadingRoutingModule
    ]
})
export class DynamicLoadingModule { }
