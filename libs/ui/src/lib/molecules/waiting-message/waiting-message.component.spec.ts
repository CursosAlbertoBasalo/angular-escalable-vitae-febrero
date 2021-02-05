import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingMessageComponent } from './waiting-message.component';

describe('WaitingMessageComponent', () => {
  let component: WaitingMessageComponent;
  let fixture: ComponentFixture<WaitingMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitingMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
