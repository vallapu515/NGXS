import { Component, ElementRef, ViewChild } from '@angular/core';
import { EmployeesService } from './employees.service';
import { AllEmployees, AllTourists, UserData } from './all-employees';
import { ColDef } from 'ag-grid-community';
import { Observable, catchError, from, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularNgxs';
  employees: any;
  tourist: any;
  postResponse: any;
  postResponse1: any = '';

  @ViewChild('Para') pTag: ElementRef | undefined;

  rowData$!: Observable<any[]>;
  colDefs: ColDef[] = [
    { field: "firstName", sortable:true, filter:true},
    { field: "contactNumber", sortable:true, filter:true},
    { field: "email", sortable:true, filter:true },
    { field: "dob", sortable:true, filter:true }
  ];
  myForm!: FormGroup;
  addUserForm!: FormGroup;
  userData = [
    {
      name:'srisailam',
      email: 'tst@tst.com',
      message: 'test msg'
    }
  ]

  usercomponentData: any;
  newMsg: string | undefined;

  constructor (private allEmployees: EmployeesService, private http: HttpClient, private router: Router){}

  ngOnInit(){
    
    
    this.addUserForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
    this.rowData$ = this.http.get<any[]>('https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001');
    this.getAllEmployees();
  }
  dataFromUsers(obj: string | undefined){
    this.usercomponentData = obj;
    console.log(this.usercomponentData);
  }
  onSubmit(){
    if(this.pTag){
      this.pTag.nativeElement.innerHTML = 'This is changed using view child';
    }
    console.log(this.addUserForm.value);
    const fData = this.addUserForm.value;
    this.allEmployees.postService(this.userData, this.userDataurl).subscribe({
      next:(response)=>{
        console.log('post---->',response);
        if(response != ''){
          this.postResponse1 = response;
        }
        // this.allEmployees.eventEmmiter.next(response);
      }, error:(error)=>{
        console.log('Service error--->', error);
      }
    });
  }
  
  employeesUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  userDataurl ="http://localhost:3000/person";
  getAllEmployees(){
    // this.allEmployees.getEmployees(this.userDataurl).subscribe((employeesData: UserData) => {
    //   this.employees = employeesData;
    // });
    // this.allEmployees.getEmployees(this.userDataurl).subscribe({
    //   next:(employees)=>{
    //     this.employees = employees;
    //   }, error:(error)=>{
    //     console.log(error);
    //   }
    // });
    // this.allEmployees.getEmployees(this.userDataurl).subscribe({
    //   next:(employe)=>{
    //     console.log(employe);
    //   }, error:(error)=>{
    //     console.log('getError===>', error);
    //   }
    // });
    this.allEmployees.getEmployees(this.userDataurl)
      .pipe(catchError((error) => of([{ name: 'my default beer', error }])))
      .subscribe((beers) => {
        console.log(beers);
        this.postResponse = beers;
        this.employees = beers;
      });
  }








  tstFunction(){
    return this.allEmployees.getEmployees(this.employeesUrl).subscribe({
      next: (res)=>{console.log(res);}, 
      error: (error)=>{console.log(error);}
    });
  }
}
