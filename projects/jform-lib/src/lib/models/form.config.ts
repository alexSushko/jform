import { FormControlTypes } from './form-control-types.enum';
import { NumberControlComponent } from '../components/controls/number-control/number-control.component';
import { TextControlComponent } from '../components/controls/text-control/text-control.component';
import { InjectionToken } from '@angular/core';
export const JFORM_CONFIG = new InjectionToken('JformConfig');
export interface FormConfig {
    mapper: ControlMapper[];
    services: any;
}
export interface ControlMapper {
    name: string;
    component: any
}
export const defaultFormConfig: FormConfig = {
    mapper: [
        {
            name: FormControlTypes.number,
            component: NumberControlComponent
        },
        {
            name: FormControlTypes.text,
            component: TextControlComponent
        }
    ],
    services: {}
}