import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../services/employee.service';
import { Modalable } from '../modal/modalable';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent extends Modalable implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.onSubmit.emit(copy);
    this.hide();
  }
}