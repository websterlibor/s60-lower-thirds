import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtComposerLineComponent } from './lt-composer-line.component';

describe('LtComposerLineComponent', () => {
  let component: LtComposerLineComponent;
  let fixture: ComponentFixture<LtComposerLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtComposerLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtComposerLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
