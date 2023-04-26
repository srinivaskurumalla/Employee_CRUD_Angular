import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  saveEmployee(data: any) : Observable<any>{
    return this._http.post('https://localhost:7047/api/Employee/AddEmployee', data);
  }

  updateEmployee(id : number, data: any) : Observable<any>{
    return this._http.put(`https://localhost:7047/api/Employee/UpdateEmployee/${id}`, data);
  }

  getEmployees(): Observable<any>{
    return this._http.get('https://localhost:7047/api/Employee/GetAllEmployees');
  }

  deleteEmployee(id: number): Observable<any>{
    return this._http.delete(`https://localhost:7047/api/Employee/DeleteEmployee/${id}`);
  }
}
