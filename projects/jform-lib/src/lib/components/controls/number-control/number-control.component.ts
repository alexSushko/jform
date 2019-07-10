import { Component, OnInit } from '@angular/core';
import { BaseInputcontrolComponent } from '../base-input-control.component';

@Component({
  selector: 'app-number-control',
  templateUrl: './number-control.component.html',
  styleUrls: ['./number-control.component.css']
})
export class NumberControlComponent extends BaseInputcontrolComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
