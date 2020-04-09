import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleFormElementsComponent } from './components/forms/simple-form-elements/simple-form-elements.component';
import { SimpleValidationComponent } from './components/forms/simple-validation/simple-validation.component';
import { ComplexFormComponent } from './components/forms/complex-form/complex-form.component';
import { ComplexValidationComponent } from './components/forms/complex-validation/complex-validation.component';
import { DataManipulationComponent } from './components/forms/data-manipulation/data-manipulation.component';
import { ParentObsComponentComponent } from './components/rxjs-example/parent-obs-component/parent-obs-component.component';

const appRoutes: Routes = [
  { path: 'simple-elements', component: SimpleFormElementsComponent },
  { path: 'simple-validation', component: SimpleValidationComponent },
  { path: 'complex-form', component: ComplexFormComponent },
  { path: 'complex-validation', component: ComplexValidationComponent },
  { path: 'data-manipulation', component: DataManipulationComponent },
  { path: 'rxjs-example', component: ParentObsComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
