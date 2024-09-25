import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TropicanoHomeComponent } from './tropicano-home.component';

describe('TropicanoHomeComponent', () => {
  let component: TropicanoHomeComponent;
  let fixture: ComponentFixture<TropicanoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TropicanoHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TropicanoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
