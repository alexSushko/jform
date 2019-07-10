import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormModelAttr, FormModel } from '../../models/form.model';
import { FormCreatorService } from '../../services/form-creator.service';
import { FormModelTypes } from '../../models/form-control-types.enum';

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnInit {
  @Input() formConfig: FormModelAttr;
  @Input() editMode: boolean;
  editing = false;
  formTypes = FormModelTypes;
  form: FormModel;
  constructor(private formCreatorService: FormCreatorService) { }

  ngOnInit() {
    this.form = <FormModel>this.formCreatorService.createForm(this.formConfig);
    console.log(this.form);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
