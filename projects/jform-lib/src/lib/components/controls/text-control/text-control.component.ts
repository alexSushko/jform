import { Component, OnInit } from '@angular/core';
import { BaseInputcontrolComponent } from '../base-input-control.component';

@Component({
  selector: 'app-text-control',
  templateUrl: './text-control.component.html',
  styleUrls: ['./text-control.component.css']
})
export class TextControlComponent extends BaseInputcontrolComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
