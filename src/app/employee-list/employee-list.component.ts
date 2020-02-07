import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //employees = employees;
  
  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
  }

  getSalaryColor(employee){
    return employee.salary > 20000 ? 'green' : null;
  }

}
