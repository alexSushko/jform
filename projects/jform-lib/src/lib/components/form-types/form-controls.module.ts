import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormControlComponent, FormControlDirective } from './form-control/form-control.component';
import { FormModelComponent } from './form-model/form-model.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FormArrayComponent,
    FormControlComponent,
    FormModelComponent,
    FormControlDirective
  ],
  exports: [
    FormArrayComponent,
    FormControlComponent,
    FormModelComponent
  ]
})
export class FormControlsModule { }
