import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesCounterComponent } from './favorites-counter.component';

describe('FavoritesCounterComponent', () => {
  let component: FavoritesCounterComponent;
  let fixture: ComponentFixture<FavoritesCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
