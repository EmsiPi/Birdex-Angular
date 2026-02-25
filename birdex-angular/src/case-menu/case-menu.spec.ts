import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseMenu } from './case-menu';

describe('CaseMenu', () => {
  let component: CaseMenu;
  let fixture: ComponentFixture<CaseMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaseMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
