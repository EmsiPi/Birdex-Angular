import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeceBirdex } from './espece-birdex';

describe('EspeceBirdex', () => {
  let component: EspeceBirdex;
  let fixture: ComponentFixture<EspeceBirdex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspeceBirdex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspeceBirdex);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
