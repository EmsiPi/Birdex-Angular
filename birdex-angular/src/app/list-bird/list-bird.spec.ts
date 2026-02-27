import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBird } from './list-bird';

describe('ListBird', () => {
  let component: ListBird;
  let fixture: ComponentFixture<ListBird>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListBird]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBird);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
