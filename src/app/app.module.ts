import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import {FormsModule} from '@angular/forms';
import { SalaryColorDirective } from './directives/salary-color.directive';
import { EmployeeNewModalComponent } from './components/employee-new-modal/employee-new-modal.component';
import { AlertSuccessComponent } from './components/alert-success/alert-success.component';
import { EmployeeEditModalComponent } from './components/employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './components/employee-delete-modal/employee-delete-modal.component';
import { MyCurrencyPipe } from './pipes/my-currency.pipe';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SalaryColorDirective,
    EmployeeNewModalComponent,
    AlertSuccessComponent,
    EmployeeEditModalComponent,
    EmployeeDeleteModalComponent,
    MyCurrencyPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
