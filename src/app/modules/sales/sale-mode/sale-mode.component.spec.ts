import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleModeComponent } from './sale-mode.component';

describe('SaleModeComponent', () => {
  let component: SaleModeComponent;
  let fixture: ComponentFixture<SaleModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleModeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
