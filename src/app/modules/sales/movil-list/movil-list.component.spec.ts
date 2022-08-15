import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovilListComponent } from './movil-list.component';

describe('MovilListComponent', () => {
  let component: MovilListComponent;
  let fixture: ComponentFixture<MovilListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovilListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
