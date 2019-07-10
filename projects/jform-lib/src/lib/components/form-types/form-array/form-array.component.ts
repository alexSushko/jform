import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormArrayModel } from '../../../models/form-array.model';
import { BaseFormComponent } from '../base-form.component';
import { JFORM_CONFIG } from '../../../models/form.config';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent extends BaseFormComponent implements OnInit {
  @Input() fcontrol: FormArrayModel;
  @Input() editing: boolean;
  constructor(@Inject(JFORM_CONFIG) config) {
    super(config);
  }

  ngOnInit() {
    super.ngOnInit(this.fcontrol);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

}
