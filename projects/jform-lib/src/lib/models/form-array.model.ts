import { BaseFormModelAttr, BaseFormModel } from './base-form.model';
import { FormModelAttr, FormModel } from './form.model';
import { FormArray, FormGroup } from '@angular/forms';
import { FormControlModel } from './form-control.model';
import { FormModelTypes } from './form-control-types.enum';

export interface FormArrayModelAttr extends BaseFormModelAttr {
    label: string;
    initialForm: FormModelAttr;
}

export function isFormArray(object: any): object is FormArrayModelAttr {
    return 'initialForm' in object;
}

export class FormArrayModel extends BaseFormModel {
    public readonly formType = FormModelTypes.formArray;
    public Label: string;
    public fcontrolModels: BaseFormModel[] = [];
    constructor(attr: FormArrayModelAttr, public initialFormFunc: () => BaseFormModel, public formControl: FormArray = new FormArray([])) {
        super(formControl, attr);
        this.Label = attr.label;
        this.addForm();
    }

    public addForm() {
        const fc = this.initialFormFunc();
        this.fcontrolModels.push(fc)
        this.formControl.push(fc.formControl);
    }
    public removeForm(index: number) {
        this.fcontrolModels.splice(index, 1);
        this.formControl.removeAt(index);
    }

}