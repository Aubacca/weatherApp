import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core/src/change_detection/change_detection';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let windDirection: string;
    switch (Math.floor(value / 90)) {
      case 0:
        windDirection = 'Norden';
        break;
      case 1:
        windDirection = 'Osten';
        break;
      case 2:
        windDirection = 'Süden';
        break;
      case 3:
        windDirection = 'Westen';
        break;

      default:
        windDirection = 'NSEW ????';
        break;
    }
    return `${windDirection} (${value}°)`;
  }
}
