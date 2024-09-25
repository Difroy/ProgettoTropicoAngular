import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingHomeComponent } from './building-home.component';

describe('BuildingHomeComponent', () => {
  let component: BuildingHomeComponent;
  let fixture: ComponentFixture<BuildingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildingHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
