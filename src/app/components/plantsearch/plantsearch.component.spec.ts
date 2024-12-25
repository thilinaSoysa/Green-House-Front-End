import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsearchComponent } from './plantsearch.component';

describe('PlantsearchComponent', () => {
  let component: PlantsearchComponent;
  let fixture: ComponentFixture<PlantsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantsearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
