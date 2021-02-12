import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToGo',
})
export class TimeToGoPipe implements PipeTransform {
  transform(stringDate: string, ...args: unknown[]): string {
    const theDate = new Date(stringDate).getTime();
    const miliseconds = Date.now() - theDate;
    const seconds = Math.round(miliseconds / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const days = Math.round(hours / 24);
    const weeks = Math.round(days / 7);
    const months = Math.round(weeks / 4);
    const years = Math.round(months / 12);
    const decades = Math.round(years / 10);
    if (Math.abs(decades) > 0) {
      return `${Math.abs(decades)} decades ${decades > 0 ? 'ago' : 'ahead'}`;
    }
    if (Math.abs(years) > 0) {
      return `${Math.abs(years)} years ${years > 0 ? 'ago' : 'ahead'}`;
    }
    if (Math.abs(months) > 0) {
      return `${Math.abs(months)} months ${months > 0 ? 'ago' : 'ahead'}`;
    }
    if (Math.abs(weeks) > 0) {
      return `${Math.abs(weeks)} weeks ${weeks > 0 ? 'ago' : 'ahead'}`;
    }
    return `${Math.abs(days)} weeks ${days > 0 ? 'ago' : 'ahead'}`;
  }
}
