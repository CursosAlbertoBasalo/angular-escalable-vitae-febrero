import { Injectable } from '@angular/core';
import { ApiStatus } from '../models/ApiStatus';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class ApiStatusStoreService extends StoreService<ApiStatus> {
  constructor() {
    super({ isLoading: false, errorMessage: null }, true);
  }
}
