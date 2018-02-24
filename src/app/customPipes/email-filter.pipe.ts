import * as _ from 'lodash';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'Filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any, filter: any, isAnd: boolean): any {
    if (filter && Array.isArray(items)) {
      const filterKeys = Object.keys(filter);
      if (isAnd) {
        return items.filter(item =>
            filterKeys.reduce((memo, keyName) =>
                (memo && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '', true));
      } else {
        return items.filter(item => {
          return filterKeys.some((keyName) => {
           // console.log(keyName);
            return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
          });
        });
      }
    } else {
      return items;
    }
  }
}
