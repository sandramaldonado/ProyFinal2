import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationClientComponent } from './validation-client.component';

describe('ValidationClientComponent', () => {
  let component: ValidationClientComponent;
  let fixture: ComponentFixture<ValidationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
