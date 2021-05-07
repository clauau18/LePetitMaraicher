import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegetableDisplayComponent } from './vegetable-display.component';

describe('VegetableDisplayComponent', () => {
  let component: VegetableDisplayComponent;
  let fixture: ComponentFixture<VegetableDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegetableDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegetableDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
