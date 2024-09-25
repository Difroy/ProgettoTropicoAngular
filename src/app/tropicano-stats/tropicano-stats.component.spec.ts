import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TropicanoStatsComponent } from './tropicano-stats.component';

describe('TropicanoStatsComponent', () => {
  let component: TropicanoStatsComponent;
  let fixture: ComponentFixture<TropicanoStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TropicanoStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TropicanoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
