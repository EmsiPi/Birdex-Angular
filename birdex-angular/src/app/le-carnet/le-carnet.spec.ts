import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeCarnet } from './le-carnet';

describe('LeCarnet', () => {
  let component: LeCarnet;
  let fixture: ComponentFixture<LeCarnet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeCarnet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeCarnet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
