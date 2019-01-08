import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
firstName: String = 'Tom';
lastName: String = 'Hopkins';
gender: String = 'Male' ;
age: Number =  0 ;

}
