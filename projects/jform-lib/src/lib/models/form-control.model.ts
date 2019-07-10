import { FormControlTypes, FormModelTypes } from './form-control-types.enum';
import { BaseFormModelAttr, BaseFormModel } from './base-form.model';
import { FormControl } from '@angular/forms';

export interface FormControlModelAttr extends BaseFormModelAttr {
    label: string;
    placeholder: string;
    intialValue: string;
    type: FormControlTypes;
}
export function isFormControl(object: any): object is FormControlModelAttr {
    return 'type' in object;
}

export class FormControlModel extends BaseFormModel {
    public readonly formType = FormModelTypes.formControl;
    public Label: string;
    public Placeholder: string;
    public IntialValue: string;
    public Type: FormControlTypes;
    constructor(attr: FormControlModelAttr, public formControl: FormControl = new FormControl()) {
        super(formControl, attr);
        this.Label = attr.label;
        this.Placeholder = attr.placeholder;
        this.IntialValue = attr.intialValue;
        this.Type = attr.type;
    }
}