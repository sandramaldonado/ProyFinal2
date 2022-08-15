import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreCityComponent } from './store-city.component';

describe('StoreCityComponent', () => {
  let component: StoreCityComponent;
  let fixture: ComponentFixture<StoreCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
