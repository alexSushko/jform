import { Component, OnInit, Input, Inject, Directive, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormControlModel } from '../../../models/form-control.model';
import { FormControlTypes } from '../../../models/form-control-types.enum';
import { JFORM_CONFIG, FormConfig } from '../../../models/form.config';
import { BaseInputcontrolComponent } from '../../controls/base-input-control.component';
import { BaseFormComponent } from '../base-form.component';
@Directive({
  selector: '[form-control]',
})
export class FormControlDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent extends BaseFormComponent implements OnInit {
  @Input() fcontrol: FormControlModel;
  @Input() editing: boolean;
  @ViewChild(FormControlDirective, { static: true }) fcHost: FormControlDirective;
  inputControl = FormControlTypes;
  constructor(
    @Inject(JFORM_CONFIG) config: FormConfig,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    super(config);
  }

  ngOnInit() {
    super.ngOnInit(this.fcontrol);
    this.setComponent();
  }
  setComponent() {
    const component = this.config.mapper.find(t => t.name === this.fcontrol.Type).component;
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    let viewContainerRef = this.fcHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<BaseInputcontrolComponent>componentRef.instance).inputConfig = this.fcontrol;
  }


  ngOnDestroy() {
    super.ngOnDestroy();
  }
}
