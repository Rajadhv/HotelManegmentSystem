import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtersearch'
})
export class FiltersearchPipe implements PipeTransform {

  transform(hotels: any, serchtext: any): any {
    console.log('hoteldata', hotels);
    console.log('serchtext', serchtext);
    if (!serchtext) {
      return hotels;
    }
    let serch = serchtext?.toLowerCase();
    return hotels.filter((element: any) => {
      return JSON.stringify(element).toLocaleLowerCase().includes(serch);
    });
  }
}
