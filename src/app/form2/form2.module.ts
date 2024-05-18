import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { EmployeeComponent } from './employee/employee.component';
import { SetvalueandpatchvalueComponent } from './setvalueandpatchvalue/setvalueandpatchvalue.component';



@NgModule({
  declarations: [
    LoginComponent,
    CalculatorComponent,
    EmployeeComponent,
    SetvalueandpatchvalueComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[
    LoginComponent, CalculatorComponent,EmployeeComponent,SetvalueandpatchvalueComponent
  ]
})
export class Form2Module { }
