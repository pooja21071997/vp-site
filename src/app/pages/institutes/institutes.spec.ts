import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Institutes } from './institutes';

describe('Institutes', () => {
  let component: Institutes;
  let fixture: ComponentFixture<Institutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Institutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Institutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
