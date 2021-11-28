import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtEntryPageComponent } from './lt-entry-page.component';

describe('LtEntryPageComponent', () => {
  let component: LtEntryPageComponent;
  let fixture: ComponentFixture<LtEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtEntryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
