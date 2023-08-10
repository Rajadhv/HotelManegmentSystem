import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(hoteldata: any, serchtext: any): any {
    console.log('hoteldata', hoteldata);
    console.log('serchtext', serchtext);
    if (!serchtext) {
      return hoteldata;
    }
    let serch = serchtext?.toLowerCase();
    return hoteldata.filter((element: any) => {
      return JSON.stringify(element).toLocaleLowerCase().includes(serch);
    });
  }
}
