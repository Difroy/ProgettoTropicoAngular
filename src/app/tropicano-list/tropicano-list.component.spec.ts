import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TropicanoListComponent } from './tropicano-list.component';

describe('TropicanoListComponent', () => {
  let component: TropicanoListComponent;
  let fixture: ComponentFixture<TropicanoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TropicanoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TropicanoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
