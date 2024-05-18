import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent  implements OnInit {
employeelogin:FormGroup;
constructor(private hu:FormBuilder){}




  ngOnInit(): void {
   this.employeelogin=this.hu.group({
    loginid:[],
    password:[],
    age:[],
    mobileno:[],
    skill:[]
   })
  }
  submitdataonconsole()
  {
    console.log(this.employeelogin.controls['loginid'].value)
    console.log(this.employeelogin.controls['password'].value)
    console.log(this.employeelogin.controls['age'].value)
    console.log(this.employeelogin.controls['mobileno'].value)
    console.log(this.employeelogin.controls['skill'].value)
  }

}
