import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(userdata: any, sercText: any): any {
    console.log(userdata);
    console.log(sercText);
    if (!sercText) {
      return userdata;
    }
    let search = sercText?.toLowerCase();
    return userdata.filter((element: any) => {
      return JSON.stringify(element).toLowerCase().includes(search);
    });
  }
}
