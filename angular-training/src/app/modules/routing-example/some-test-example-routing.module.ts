
// Routing module components

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ParentPageComponent } from './components/parent-page/parent-page.component';
import { FirstChildPageComponent } from './components/first-child-page/first-child-page.component';
import { SecondChildPageComponent } from './components/second-child-page/second-child-page.component';

const testModuleRoutes: Routes = [
    {
        path: 'first-page',
        component: FirstPageComponent
    },
    {
        path: 'second-page',
        component: SecondPageComponent
    },
    {
        path: 'parent-page',
        component: ParentPageComponent,
        children: [
            {
                path: '',
                redirectTo: 'first-child-page',
                pathMatch: 'full'
            },
            {
                path: 'first-child-page',
                component: FirstChildPageComponent,
                data: { firstName: 'Vasya', lastName: 'Pupkin' }
            },
            {
                path: 'second-child-page/:id',
                component: SecondChildPageComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(testModuleRoutes)],
    exports: [RouterModule]
})
export class SomeTestExampleRoutingModule { }
