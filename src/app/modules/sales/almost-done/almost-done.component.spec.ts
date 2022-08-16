import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmostDoneComponent } from './almost-done.component';

describe('AlmostDoneComponent', () => {
  let component: AlmostDoneComponent;
  let fixture: ComponentFixture<AlmostDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlmostDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlmostDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
