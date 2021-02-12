import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrackingService {
  track(entry: { category: string; action: string; param: string }) {
    console.log(entry);
  }
}
