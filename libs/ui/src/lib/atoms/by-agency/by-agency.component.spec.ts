import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByAgencyComponent } from './by-agency.component';

describe('ByAgencyComponent', () => {
  let component: ByAgencyComponent;
  let fixture: ComponentFixture<ByAgencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByAgencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
