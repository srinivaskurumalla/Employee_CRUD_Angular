import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {

  empForm: FormGroup;
  education: string[] = [
    'Diploma',
    'Under Graduation',
    'Post Graduation'
  ]

  /**
   *
   */
  constructor(private _fb: FormBuilder, private empService: EmployeeService, private _dialogRef: DialogRef<EmpAddEditComponent>
  ,private router : Router) {
    this.empForm = _fb.group({
  firstName : '',
  lastName : '',
  email : '',
  dob : '',
  gender : '',
  education : '',
  company : '',
  experience : '',
  package : '',
})

  }

  formSubmit() {
    if (this.empForm.valid) {
      console.log(this.empForm.value);
      this.empService.saveEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Employee Added Successfully');
          this.router.navigate(['/payment'])
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.log(err);
        }
      }

      )

    }
  }
}
