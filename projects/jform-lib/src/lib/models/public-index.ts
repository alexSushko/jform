import { FormModelAttr } from './form.model';
import { FormArrayModelAttr } from './form-array.model';
import { FormControlModelAttr } from './form-control.model';
import { FormControlTypes } from './form-control-types.enum';

export type AllConfigFiles =
    FormModelAttr
    | FormControlModelAttr
    | FormArrayModelAttr
    | FormControlTypes