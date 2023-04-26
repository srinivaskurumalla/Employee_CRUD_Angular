import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Employee_CRUD';


  constructor(private _dailog: MatDialog, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  openAddEditForm(){
    this._dailog.open(EmpAddEditComponent);

  }


  getEmployees() {
    this.empService.getEmployees().subscribe({
      next: (res) => console.log(res),
      error: console.log
    })
  }

}
