import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtProjectsComponent } from './lt-projects.component';

describe('LtProjectsComponent', () => {
  let component: LtProjectsComponent;
  let fixture: ComponentFixture<LtProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
