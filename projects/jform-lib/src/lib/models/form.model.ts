import { BaseFormModelAttr, BaseFormModel } from './base-form.model';
import { FormGroup } from '@angular/forms';
import { FormModelTypes } from './form-control-types.enum';


export interface FormModelAttr extends BaseFormModelAttr {
    controls: BaseFormModelAttr[];

}
export function isFormModel(object: any): object is FormModelAttr {
    return 'controls' in object;
}

export class FormModel extends BaseFormModel {
    public readonly formType = FormModelTypes.formModel;
    constructor(attr: FormModelAttr, public Controls: BaseFormModel[], public formControl: FormGroup = new FormGroup({})) {
        super(formControl, attr);
    }
}