
// Routing module components

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DynamicParentPageComponent } from './components/parent-page/parent-page.component';
import { DynamicFirstChildPageComponent } from './components/first-child-page/first-child-page.component';
import { DynamicSecondChildPageComponent } from './components/second-child-page/second-child-page.component';

const dynamicModuleRoutes: Routes = [
    {
        path: '',
        redirectTo: 'parent-page'
    },
    {
        path: 'parent-page',
        component: DynamicParentPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'first-child-page',
                pathMatch: 'full'
            },
            {
                path: 'first-child-page',
                component: DynamicFirstChildPageComponent,
                data: { firstName: 'Vasya', lastName: 'Pupkin' }
            },
            {
                path: 'second-child-page/:id',
                component: DynamicSecondChildPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(dynamicModuleRoutes)],
    exports: [RouterModule]
})
export class DynamicLoadingRoutingModule { }
