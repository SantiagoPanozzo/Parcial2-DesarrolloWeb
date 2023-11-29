import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestsViewComponent } from './tests/views/tests-view/tests-view.component';
import { TestFormViewComponent } from './tests/views/test-form-view/test-form-view.component';
import { AdminPageComponent } from './views/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children:
      [
        { path: 'tests', component: TestsViewComponent, pathMatch: 'full' },
        { path: 'tests/new', component: TestFormViewComponent, pathMatch: 'full' },
        { path: 'tests/:id', component: TestFormViewComponent, pathMatch: 'full' },
        { path: '**', redirectTo: 'tests' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
