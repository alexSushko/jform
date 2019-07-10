import { AbstractControl } from '@angular/forms';
import { FormModelTypes } from './form-control-types.enum';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface BaseFormModelAttr {
    name: string;
    onValueChanges: string;
    onInit: string;
}

export abstract class BaseFormModel {
    public readonly formType: FormModelTypes;
    public Name: string;
    public OnValueChanges: Function;
    public OnInit: Function;

    private lifetime$ = new Subject();

    constructor(public formControl: AbstractControl, attr: BaseFormModelAttr) {
        this.Name = attr.name;
        //init values
        this.OnValueChanges = new Function("value", "config", "services", attr.onValueChanges);
        this.OnInit = new Function("config", "services", attr.onInit);
    }

    public bind(caller: any) {
        this.OnValueChanges = this.OnValueChanges.bind(caller);
        this.OnInit = this.OnInit.bind(caller);
    }

    public link(services: any) {
        this.formControl.valueChanges.pipe(
            takeUntil(this.lifetime$)
        ).subscribe(value => this.callFunction("OnChange", this.OnValueChanges, value, this, services));
        this.callFunction("OnInit", this.OnInit, this, services);
    }

    callFunction(funcType: string, func: Function, ...args) {
        try {
            func(...args);
            console.log("called function: " + funcType);
        } catch (error) {
            console.log({ functionType: funcType, exception: error });
        }
    }

    public destroy() {
        console.log('Destoyed')
        this.lifetime$.next();
        this.lifetime$.complete();
    }
}