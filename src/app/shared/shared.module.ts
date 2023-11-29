import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifierComponent } from './components/notifier/notifier.component';



@NgModule({
  declarations: [
    NotifierComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotifierComponent
  ]
})
export class SharedModule { }
