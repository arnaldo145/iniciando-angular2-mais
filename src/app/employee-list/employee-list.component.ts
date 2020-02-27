import { EmployeeNewModalComponent } from './../employee-new-modal/employee-new-modal.component';
import { EmployeeService } from './../employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @ViewChild(EmployeeNewModalComponent, {static: false})
  employeeNewModal: EmployeeNewModalComponent;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
  }

  getSalaryColor(employee) {
    return employee.salary > 20000 ? 'green' : null;
  }

  openNewModal(){
    this.employeeNewModal.show();
  }

}
