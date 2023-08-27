import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'owner',
})
export class OwnerPipe implements PipeTransform {
  transform(ownerdata: any, serchtext: any): any {
    console.log(ownerdata);
    console.log(serchtext);
    if (!serchtext) {
      return ownerdata;
    }
    let serch = serchtext?.toLowerCase();
    return ownerdata.filter((element: any) => {
      return JSON.stringify(element).toLowerCase().includes(serch);
    });
  }
}
