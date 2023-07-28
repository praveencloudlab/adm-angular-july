import { Component } from '@angular/core';
import EMP_DATA from '../data/data';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent {

  employees=EMP_DATA;

  

}
