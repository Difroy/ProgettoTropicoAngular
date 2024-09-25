import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TropicanoComponent } from './tropicano.component';

describe('TropicanoComponent', () => {
  let component: TropicanoComponent;
  let fixture: ComponentFixture<TropicanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TropicanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TropicanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
