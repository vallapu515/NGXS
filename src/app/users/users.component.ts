import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  @Input() postData: any;
  @Output() sampleData = new EventEmitter<any>();
  title = 'User Data'
  constructor(private employees: EmployeesService){}

  parentData:any;

  ngOnInit(): void {
    this.parentData = this.postData;
  }

  delete(){
    this.sampleData.emit(this.parentData);
  }

}
