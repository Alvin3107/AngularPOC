import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { option } from './input-interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: string = '';
  @Input() inputId: string = '';
  @Input() label: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() radioOptions!: option[];
  @Input() selectOptions!: option[];
  @Input() multiSelectOptions!: option[];
  @Input() checkboxOptions!: option[];
  @Output() checkedValuesOutput = new EventEmitter();
  checkedValues: any = [];



  errorMessages: Record<string, string> = {
    required: 'The field is required',
    pattern: 'Please enter valid value'
  }
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {

  }

  checked(event: any, value: any) {
    if (event.target.checked) {
      this.checkedValues.push(value);
    } else {
      this.checkedValues = this.checkedValues.filter(((item: any) => item !== value));
    }
    this.checkedValuesOutput.emit(this.checkedValues)
  }

}
