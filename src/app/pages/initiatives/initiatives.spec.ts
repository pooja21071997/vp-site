import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Initiatives } from './initiatives';

describe('Initiatives', () => {
  let component: Initiatives;
  let fixture: ComponentFixture<Initiatives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Initiatives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Initiatives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
