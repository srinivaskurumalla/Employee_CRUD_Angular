import { Component, OnInit,ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { EmployeeService } from '../services/employee.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CoreService } from '../core/core.service';
@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit{
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email','dob','gender','education','company','experience','package','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dailog: MatDialog,
    private empService: EmployeeService,
  private _coreService : CoreService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  openAddEditForm(){
    const dailogueRef = this._dailog.open(EmpAddEditComponent);
    dailogueRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployees();
        }
      }
    })

  }


  getEmployees() {
    this.empService.getEmployees().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(id: number) {
    this.empService.deleteEmployee(id).subscribe({
      next: (res) => {

        this._coreService.openSnackBar(`Employee with id ${id}  deleted successfully`,'done')
        this.getEmployees();
      },
      error: console.log
    })
  }


  openEditForm(data : any) {
    const dailogueRef = this._dailog.open(EmpAddEditComponent, { data });

    dailogueRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployees();
        }
      }
    })
  }
}
