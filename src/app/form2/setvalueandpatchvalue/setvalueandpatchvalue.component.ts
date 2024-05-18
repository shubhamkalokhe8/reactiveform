import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setvalueandpatchvalue',
  templateUrl: './setvalueandpatchvalue.component.html',
  styleUrl: './setvalueandpatchvalue.component.css'
})
export class SetvalueandpatchvalueComponent implements OnInit{
customer:FormGroup;
constructor(private fm:FormBuilder)
{}
  ngOnInit(): void {
this.customer=this.fm.group({
  username:[],
  password:[],
  budget:[],
  income:[]
})
  }
  showalldatainconsole()
  {
    console.log(this.customer.controls['username'].value)
    console.log(this.customer.controls['password'].value)
    console.log(this.customer['budget'].value)
    console.log(this.customer['income'].value)
  }
usesetvalue()
{
  this.customer.controls['username'].setValue('jay')
}
usepatchvalue()
{
  this.customer.patchValue({
    username:['avinash'],
    password:['jdidi'],
    budget:['hxsdi@123'],
    income:['14535']

  })
}
}
