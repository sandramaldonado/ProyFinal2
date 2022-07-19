import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckCoverageComponent } from './check-coverage.component';

describe('CheckCoverageComponent', () => {
  let component: CheckCoverageComponent;
  let fixture: ComponentFixture<CheckCoverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckCoverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
