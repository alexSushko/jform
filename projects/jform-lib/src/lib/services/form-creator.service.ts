import { Injectable, Inject } from '@angular/core';
import { JFORM_CONFIG } from '../models/form.config';
import { FormModelAttr, isFormModel, FormModel } from '../models/form.model';
import { FormControl, AbstractControl, FormGroup, FormArray } from '@angular/forms';
import { BaseFormModelAttr, BaseFormModel } from '../models/base-form.model';
import { FormArrayModelAttr, FormArrayModel, isFormArray } from '../models/form-array.model';
import { isFormControl, FormControlModel, FormControlModelAttr } from '../models/form-control.model';

@Injectable({
  providedIn: 'root'
})
export class FormCreatorService {

  constructor(@Inject(JFORM_CONFIG) private config) { }

  createForm(baseform: BaseFormModelAttr): BaseFormModel {
    if (isFormModel(baseform)) {
      const formAttr = <FormModelAttr>baseform;
      if (formAttr.controls.length) {
        let fg = new FormGroup({});
        let fmlist = [];
        formAttr.controls.forEach(control => {
          const fc = this.createForm(control);
          fmlist.push(fc);
          fg.addControl(control.name, fc.formControl)
        }
        );
        const form = new FormModel(formAttr, fmlist, fg);
        return form;
      }
    } else if (isFormArray(baseform)) {
      const formAttr = <FormArrayModelAttr>baseform;
      const form = new FormArrayModel(formAttr, () => this.createForm(formAttr.initialForm))
      return form;
    } else if (isFormControl(baseform)) {
      const formAttr = <FormControlModelAttr>baseform;
      const form = new FormControlModel(formAttr);
      return form;
    }

  }
}
