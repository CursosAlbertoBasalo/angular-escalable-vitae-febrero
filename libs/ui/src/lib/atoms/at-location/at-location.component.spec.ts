import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtLocationComponent } from './at-location.component';

describe('AtLocationComponent', () => {
  let component: AtLocationComponent;
  let fixture: ComponentFixture<AtLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
