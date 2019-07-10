import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormConfig, JFORM_CONFIG, defaultFormConfig } from './models/form.config';
import { JsonFormComponent } from './components/json-form/json-form.component';
import { ControlsModule } from './components/controls/controls.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormControlsModule } from './components/form-types/form-controls.module';

@NgModule({
  declarations: [JsonFormComponent,],
  imports: [
    ControlsModule,
    FormsModule,
    CommonModule,
    FormControlsModule
  ],
  exports: [JsonFormComponent,],
  providers: [
    {
      provide: JFORM_CONFIG,
      useValue: defaultFormConfig
    }
  ]
})
export class JformLibModule {
  static forRoot(config: FormConfig = defaultFormConfig): ModuleWithProviders {
    return {
      ngModule: JformLibModule,
      providers: [
        {
          provide: JFORM_CONFIG,
          useValue: config
        }
      ]
    }
  }
}
