import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';
import Department from '../components/department/department';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
// import { HttpHeaders } from '@angular/common/http/src/headers';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class DepartmentService {
  apiURL = "http://pkcd06n11w66.cloud.wavemakeronline.com/DemoTest/services/hrdb/Department";

  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('DepartmentService');
  }

  /** GET all department details from the server */
  getDepartments(): Observable<Department[]> {
    return this.http.get(this.apiURL)
      .map(data => {
        return data["content"] as Department[] || []
      })
      .pipe(
      catchError(this.handleError('getDepartments', []))
      );
  }

  /** Update: Update the department from the server */

  updateDepartment(dept: Department): Observable<Department> {
    const url = `${this.apiURL}/${dept.deptId}`;
    return this.http.put<Department>(url, dept, httpOptions)
      .pipe(
      catchError(this.handleError('updateDepartment', dept))
      );

  }
  private handleError1(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
  /** DELETE: delete the department from the server */
  deleteDepartment(id: number): Observable<{}> {
    const url = `${this.apiURL}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
      catchError(this.handleError('deleteDepartment'))
      );

  }
}
