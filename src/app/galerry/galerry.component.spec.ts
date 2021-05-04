import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerryComponent } from './galerry.component';

describe('GalerryComponent', () => {
  let component: GalerryComponent;
  let fixture: ComponentFixture<GalerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalerryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
