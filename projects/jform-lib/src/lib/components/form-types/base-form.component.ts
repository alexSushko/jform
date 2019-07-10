import { Component, OnInit } from '@angular/core';
import { BaseFormModel } from '../../models/base-form.model';
import { FormConfig } from '../../models/form.config';

export class BaseFormComponent {
    fcontrol: BaseFormModel;

    constructor(public config: FormConfig) {
    }
    ngOnInit(baseModel: BaseFormModel): void {
        this.fcontrol = baseModel;
        baseModel.bind(this);
        baseModel.link(this.config.services);
    }

    ngOnDestroy(): void {
        this.fcontrol.destroy();
    }
}
