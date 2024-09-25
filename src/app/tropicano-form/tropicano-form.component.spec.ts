import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TropicanoFormComponent } from './tropicano-form.component';

describe('TropicanoFormComponent', () => {
  let component: TropicanoFormComponent;
  let fixture: ComponentFixture<TropicanoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TropicanoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TropicanoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
