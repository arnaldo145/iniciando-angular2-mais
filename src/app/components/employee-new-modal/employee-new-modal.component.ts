import { ModalComponent } from './../modal/modal.component';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';

declare const $;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0,
  };

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();
  @ViewChild(ModalComponent, {static: false})
  modalComponent: ModalComponent;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

  hide(){
    this.modalComponent.hide();
  }

  show() {
    this.modalComponent.show();
  }
}
