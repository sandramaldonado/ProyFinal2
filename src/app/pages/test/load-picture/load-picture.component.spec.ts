import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPictureComponent } from './load-picture.component';

describe('LoadPictureComponent', () => {
  let component: LoadPictureComponent;
  let fixture: ComponentFixture<LoadPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
