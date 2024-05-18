import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Calculator } from '../../model/calculator';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit{
calculation:FormGroup;

constructor(private si:FormBuilder)
{}
  ngOnInit(): void {
    
     
    this.calculation=this.si.group(
      { firstnumber:[],
      second:[],
      result:[]
      }
    )
    
  }
  addition()
  {
this.calculation.controls['result'].setValue(this.calculation.controls['firstnumber'].value+this.calculation.controls['second'].value)
   console.log("hi")

  }
  substraction(){
    console.log("now calling substraction")
   this.calculation.controls['result'].setValue(this.calculation.controls['firstnumber'].value-this.calculation.controls['second'].value)
  }
  multiplication()
  {
this.calculation.controls['result'].setValue(this.calculation.controls['firstnumber'].value*this.calculation.controls['second'].value)
  }
  division(){
    this.calculation.controls['result'].setValue(this.calculation.controls['firstnumber'].value/this.calculation.controls['second'].value)
  }
}
