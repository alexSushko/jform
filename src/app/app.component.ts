import { Component } from '@angular/core';
import { FormModelAttr } from 'jform-lib/lib/models/form.model';
import { FormControlModelAttr } from 'jform-lib/lib/models/form-control.model';
import { BaseFormModelAttr } from 'jform-lib/lib/models/base-form.model';
import { FormControlTypes } from 'projects/jform-lib/src/lib/models/form-control-types.enum';
import { FormArrayModelAttr } from 'jform-lib/lib/models/form-array.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jform';
  formConfig = <FormModelAttr>{
    name: 'testform',
    controls: [
      <BaseFormModelAttr>(<FormControlModelAttr>{
        label: 'testcontrol1',
        name: 'testcontrol1 - name',
        type: FormControlTypes.text,
        onInit: "console.log({config: config, services: services, t: this});",
        onValueChanges: "console.log({value: value, config: config, services: services, t: this});"
      }),
      <BaseFormModelAttr>(<FormArrayModelAttr>{
        initialForm: {
          name: 'testarrinitform',
          onInit: "console.log({config: config, services: services, t: this});",
          onValueChanges: "console.log({value: value, config: config, services: services, t: this});",
          controls: [
            <BaseFormModelAttr>(<FormControlModelAttr>{
              label: 'testcontrol2',
              name: 'testcontrol2 - name',
              type: FormControlTypes.number,
              onInit: "console.log({config: config, services: services, t: this});",
              onValueChanges: "console.log({value: value, config: config, services: services, t: this});"
            })
          ]
        }
      })
    ]
  }
}
