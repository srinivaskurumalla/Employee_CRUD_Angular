import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { EmployeeService } from '../services/employee.service';
import { LoginComponent } from '../users/login/login.component';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit{
  title = 'Employee_CRUD';


  constructor(private _dailog: MatDialog, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  openAddEditForm(){
    this._dailog.open(EmpAddEditComponent);

  }
  LoginForm() {
    this._dailog.open(LoginComponent);
  }

  getEmployees() {
    this.empService.getEmployees().subscribe({
      next: (res) => console.log(res),
      error: console.log
    })
  }

}
