import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  /**
   *
   */
  data: Array<any> = [{
    Name: 'Rakesh',
    email: 'rakesh@gmail.com',
    password : 'rakesh'
  },
    {
      Name: 'srinivas',
      email: 'sri@gmail.com',
      password  : '12345'
  }];
  constructor(private _fb : FormBuilder,private router : Router,private _dialogRef: DialogRef<LoginComponent>) {
    this.loginForm = _fb.group({
      Name: '',
      email: '',
      password :''
  })
  }

  loginFormSubmit() {
    console.log(this.loginForm.value);

    const credentials = this.loginForm;
    console.log(credentials.value. Name);
    if (credentials.value.Name === 'srinivas' && credentials.value.password === '12345') {

      this._dialogRef.close();
       this.router.navigate(['/payment'])
    }
    else {
      alert('wrong login credetials, redirecting to home page')
      this.router.navigate(['/'])
      this._dialogRef.close();
    }
  }
}
