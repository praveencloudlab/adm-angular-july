import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styles: [
  ]
})
export class EmployeeComponent {

  @Input()
  emp:any;

}
