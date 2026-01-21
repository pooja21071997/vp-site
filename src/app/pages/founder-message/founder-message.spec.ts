import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderMessage } from './founder-message';

describe('FounderMessage', () => {
  let component: FounderMessage;
  let fixture: ComponentFixture<FounderMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FounderMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FounderMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
