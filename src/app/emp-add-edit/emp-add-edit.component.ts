import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AppBarComponent } from '../app-bar/app-bar.component';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  AppBarComponent!: AppBarComponent;
  empForm: FormGroup;
  education: string[] = ['Diploma', 'Under Graduation', 'Post Graduation'];

  /**
   *
   */
  constructor(
    private _fb: FormBuilder,
    private empService: EmployeeService,
    private _dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private router: Router
  ) {
    this.empForm = _fb.group({
      firstName: ['', Validators.required],
      lastName: '',
      email: ['',[ Validators.required, Validators.email]],
      dob: ['', [Validators.required,this.ageValidator]],
      gender: ['', Validators.required],
      education: ['', Validators.required],
      company: ['', Validators.required],
      experience: ['', Validators.required],
      package: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }


  get emailControl() {
    return this.empForm.get('email');
  }

  formSubmit() {
    //setting all the fiels as touched when submit the form
    Object.values(this.empForm.controls).forEach(control => {
      control.markAsTouched();
    });


    if (this.empForm.valid) {
       //update data
      if (this.data) {
        this.empService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._coreService.openSnackBar('Employee Updated Successfully');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.log(err);
            },
          });
      }

       //add data
      else {
        console.log(this.empForm.value);
        this.empService.saveEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Employee Added Successfully');

            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    }
  }

  ageValidator(control: { value: any; }) {
    const age = moment().diff(control.value, 'years');
    if (age < 18 || age > 60) {
      return { invalidAge: true };
    }
    return null;
  }
}
