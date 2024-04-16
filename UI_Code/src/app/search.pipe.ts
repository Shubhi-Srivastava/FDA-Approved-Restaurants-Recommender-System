import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(userData: any[], searchtext: string): any[] {

    if(!userData) return [];
    if(!searchtext) return userData;
    searchtext = searchtext.toLowerCase();
    return userData.filter( it => {
    return it.cuisine.toLowerCase().startsWith(searchtext);
    });
  }
}
