import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantupdateComponent } from './plantupdate.component';

describe('PlantupdateComponent', () => {
  let component: PlantupdateComponent;
  let fixture: ComponentFixture<PlantupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantupdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
