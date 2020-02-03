import { Component, OnInit } from '@angular/core';
import employees from '../employees';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name: string = '';
  salary: number = 0;
  employees = employees;

  constructor() { }

  ngOnInit() {
  }

  addEmployee(){
    this.employees.push({name: this.name, salary: this.salary});
    console.log(this.employees);
  }

}
