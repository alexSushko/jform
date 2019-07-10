import { Component, OnInit, Input, Inject } from '@angular/core';
import { BaseFormComponent } from '../base-form.component';
import { FormModel } from '../../../models/form.model';
import { FormModelTypes } from '../../../models/form-control-types.enum';
import { JFORM_CONFIG } from '../../../models/form.config';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent extends BaseFormComponent implements OnInit {
  @Input() fcontrol: FormModel;
  @Input() editing: boolean;
  formTypes = FormModelTypes;
  constructor(@Inject(JFORM_CONFIG) config) {
    super(config);
  }

  ngOnInit() {
    super.ngOnInit(this.fcontrol);
  }

}
