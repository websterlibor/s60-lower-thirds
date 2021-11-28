import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtPreviewComponent } from './lt-preview.component';

describe('LtPreviewComponent', () => {
  let component: LtPreviewComponent;
  let fixture: ComponentFixture<LtPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
