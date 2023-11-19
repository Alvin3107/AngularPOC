import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { option } from '../shared/input/input-interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  public employeeForm: any;
  public gender: option[] = [{ label: 'Male', value: 'M' },
  { label: 'Female', value: 'F' },
  { label: 'Others', value: 'O' }];

  public martialStatusList: option[] = [{ label: 'Married', value: 'Y' },
  { label: 'Un Married', value: 'N' }];

  public countries: option[] = [{ label: 'India', value: 'IND' },
  { label: 'Pakistan', value: 'PAK' },
  { label: 'Australia', value: 'AUS' }];

  public techList: option[] = [{ label: 'HTML', value: 'html' },
  { label: 'CSS', value: 'css' },
  { label: 'Angular', value: 'angular' },
  { label: 'React', value: 'react' },
  { label: 'ExpressJs', value: 'express.js' },
  { label: 'NextJs', value: 'next.js' },
  ]

  public preferredWorkHours = [{ label: '10 Hours', value: '10' },
  { label: '8 Hours', value: '8' },
  { label: '6 Hours', value: '6' }]

  public selectedPreferredWorkHour = [];


  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService) {
    this.toastrService.toastrConfig.positionClass = 'toast-bottom-right';
  }


  ngOnInit(): void {
    this.createEmployeeForm();
  }


  private createEmployeeForm(): void {
    this.employeeForm = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{10}$')]),
      mail: new FormControl('', [Validators.required,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')]),
      age: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      martialStatus: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      knownTechs: new FormControl('', [Validators.required]),
      preferredWorkHours: new FormControl('', [Validators.required]),
      hobbies: new FormControl('', [Validators.required]),
      cv: new FormControl('', [Validators.required]),
      rateCommunication: new FormControl('', [Validators.required]),
      preferredColor: new FormControl('', [Validators.required])
    })
  }

  public employeeRegister() {
    if (this.employeeForm.valid) {
      let employeeFormValue = this.employeeForm.value;
      employeeFormValue.preferredWorkHours = this.selectedPreferredWorkHour;
      this.toastrService.success('Employee registered Successfully');
      console.log(employeeFormValue);
    } else {
      this.employeeForm.markAllAsTouched();
      this.toastrService.error('Please fill the required fields');
    }
  }

  preferredWorkingHours(value: any) {
    this.selectedPreferredWorkHour = value;
  }
}
