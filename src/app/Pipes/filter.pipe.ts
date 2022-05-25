import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string ): any {
    if(!value || !filterString){
      return value;
    }

    const dataArray:any[] = [];
    for(let note of value){
        if(note.bookName.toLocaleLowerCase().includes(filterString) || note.authorName.toLocaleLowerCase().includes(filterString || note.description.toLocaleLowerCase().includes(filterString) || note.author.toLocaleLowerCase().includes(filterString)  || note.discountPrice.toString().includes(filterString))) {
          dataArray.push(note);
        }
    }
    return dataArray;

  }

}