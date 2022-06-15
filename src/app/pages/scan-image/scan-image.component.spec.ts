import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanImageComponent } from './scan-image.component';

describe('ScanImageComponent', () => {
  let component: ScanImageComponent;
  let fixture: ComponentFixture<ScanImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScanImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
