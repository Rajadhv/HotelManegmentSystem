import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(hoteldata: any, serchtext: any): any {
    console.log(hoteldata);
    console.log(serchtext);
    if (!serchtext) {
      return hoteldata;
    }
    let search = serchtext?.toLowerCase();
    return hoteldata.filter((element: any) => {
      return JSON.stringify(element).toLowerCase().includes(search);
    });
  }
}
