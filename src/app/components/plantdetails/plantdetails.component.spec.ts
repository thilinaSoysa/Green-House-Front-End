import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantdetailsComponent } from './plantdetails.component';

describe('PlantdetailsComponent', () => {
  let component: PlantdetailsComponent;
  let fixture: ComponentFixture<PlantdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
