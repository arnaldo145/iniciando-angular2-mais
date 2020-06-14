import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Employee } from '../../services/employee.service';
import { ModalComponent } from '../modal/modal.component';

declare const $;

@Component({
  selector: 'employee-edit-modal',
  templateUrl: './employee-edit-modal.component.html',
  styleUrls: ['./employee-edit-modal.component.css']
})
export class EmployeeEditModalComponent implements OnInit {

  @Input()
  employee: Employee;

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  @ViewChild(ModalComponent, {static: false})
  modalComponent: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

  addEmployee(event) {
    const copy = Object.assign({}, this.employee);
    this.onSubmit.emit(copy);
    this.hide();
  }

  hide() {
    this.modalComponent.hide();
  }

  show() {
    this.modalComponent.show();
  }
}