import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
registration:FormGroup;
constructor(private fb:FormBuilder){}
  ngOnInit(): void {
this.registration=this.fb.group({
  fullname:['',[Validators.required,Validators.maxLength(14),Validators.minLength(9)]  ],
  age:['',[Validators.required,Validators.max(60),Validators.min(20)]],
  email:['abc@gmail.com',[Validators.required,Validators.email]],
  contact:['',Validators.required],
  username:['',[Validators.required,Validators.pattern(/^.*ok$/)]]
})
  }

  onsubmit(){
    console.log(this.registration.controls['fullname'].value)
    console.log(this.registration.controls['age'].value)
    console.log(this.registration.controls['email'].value)
    console.log(this.registration.controls['contact'].value)
    console.log(this.registration)
  }
}
