import { Injectable } from '@angular/core';
import { StoreService } from '@vitae/data';
import { ApiStatus } from '../models/ApiStatus';

@Injectable({
  providedIn: 'root',
})
export class ApiStatusStoreService extends StoreService<ApiStatus> {
  constructor() {
    super({ isLoading: false, errorMessage: null }, true);
  }
}
