import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDays'
})
export class AddDaysPipe implements PipeTransform {

  transform(value: any,days:number): any {
  let date=new Date(value);
  date.setDate(date.getDate()+days);
    return date;
  }

}
