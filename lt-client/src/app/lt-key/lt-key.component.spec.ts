import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtKeyComponent } from './lt-key.component';

describe('LtKeyComponent', () => {
  let component: LtKeyComponent;
  let fixture: ComponentFixture<LtKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
