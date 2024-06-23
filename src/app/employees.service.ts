import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AllEmployees, AllTourists, UserData } from './all-employees';
import { Observable, Subject, catchError, filter, map, throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  // employeesUrl = 'all-employees.json';

  // eventEmmiter = new EventEmitter<any>();

  eventEmmiter = new Subject<any>();

  constructor(private http: HttpClient) { }

  raiseEmmiter(data: any){
    this.eventEmmiter.next(data);
  }
  getEmployees(inputUrl:any){
    return this.http.get<UserData>(inputUrl);
  }

  postService(UserData:any, url: any):Observable<any> {
    const body = JSON.stringify(UserData);
    const header = {'content-type':'applicaiton/json'};
    return this.http.post<UserData>(url, body,{'headers':header}).pipe(
        catchError(this.handleError)
      );
  }
  handleError(error: { message: any; }){
   return throwError(()=>error.message);
  }

  sampleGetService(url: string): Observable<any>{
    return this.http.get(url).pipe(catchError(this.handleError))
  }
}