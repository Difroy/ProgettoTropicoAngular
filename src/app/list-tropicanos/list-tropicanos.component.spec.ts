import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTropicanosComponent } from './list-tropicanos.component';

describe('ListTropicanosComponent', () => {
  let component: ListTropicanosComponent;
  let fixture: ComponentFixture<ListTropicanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTropicanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTropicanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



