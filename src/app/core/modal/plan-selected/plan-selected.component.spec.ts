import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSelectedComponent } from './plan-selected.component';

describe('PlanSelectedComponent', () => {
  let component: PlanSelectedComponent;
  let fixture: ComponentFixture<PlanSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
