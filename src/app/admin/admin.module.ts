import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestsViewComponent } from './tests/views/tests-view/tests-view.component';
import { TestFormViewComponent } from './tests/views/test-form-view/test-form-view.component';
import { TestsFormComponent } from './tests/components/tests-form/tests-form.component';
import { TestsListComponent } from './tests/components/tests-list/tests-list.component';
import { TestsListItemComponent } from './tests/components/tests-list/tests-list-item/tests-list-item.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './views/admin-page/admin-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TestsViewComponent,
    TestFormViewComponent,
    TestsFormComponent,
    TestsListComponent,
    TestsListItemComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AdminModule { }
