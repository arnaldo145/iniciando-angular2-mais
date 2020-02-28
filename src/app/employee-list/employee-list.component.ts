import { EmployeeDeleteModalComponent } from './../employee-delete-modal/employee-delete-modal.component';
import { EmployeeNewModalComponent } from './../employee-new-modal/employee-new-modal.component';
import { EmployeeService, Employee } from './../employee.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeEditModalComponent } from '../employee-edit-modal/employee-edit-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee;
  showMessageSuccess: boolean = false;
  employeeToEdit: Employee;
  employeeToDelete: Employee;

  @ViewChild(EmployeeNewModalComponent, { static: false })
  employeeNewModal: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent, { static: false })
  employeeEditModal: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent, { static: false })
  employeeDeleteModal: EmployeeDeleteModalComponent;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
  }

  getSalaryColor(employee) {
    return employee.salary > 20000 ? 'green' : null;
  }

  openNewModal() {
    this.employeeNewModal.show();
  }

  openEditModal(employee: Employee) {
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }

  onNewEmployee(employee: Employee) {
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  openDestroyModal(employee: Employee) {
    this.employeeToDelete = employee;
    this.employeeDeleteModal.show();
  }

  onEditEmployee(employee: Employee) {
    console.log(employee);
  }

  onDestroyEmployee(employee: Employee) {
    console.log(employee);
  }
}
