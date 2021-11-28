import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtComposerComponent } from './lt-composer.component';

describe('LtComposerComponent', () => {
  let component: LtComposerComponent;
  let fixture: ComponentFixture<LtComposerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtComposerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtComposerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
