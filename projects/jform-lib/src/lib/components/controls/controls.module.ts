import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberControlComponent } from './number-control/number-control.component';
import { TextControlComponent } from './text-control/text-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NumberControlComponent,
    TextControlComponent
  ],
  exports: [
    NumberControlComponent,
    TextControlComponent
  ],
  entryComponents: [
    NumberControlComponent,
    TextControlComponent
  ]
})
export class ControlsModule { }
