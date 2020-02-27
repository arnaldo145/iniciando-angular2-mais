import { EmployeeService } from './../employee.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Employee } from '../employee.service';

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

  constructor(private element: ElementRef, private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee() {
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.hide();
  }

  hide(){
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }

  show() {
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }


  private getDivModal(): HTMLElement {
    const nativeElement: HTMLElement = this.element.nativeElement;
    return nativeElement.firstChild.firstChild as HTMLElement;
  }
}
