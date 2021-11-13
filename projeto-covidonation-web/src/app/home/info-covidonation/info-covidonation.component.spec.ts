import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCovidonationComponent } from './info-covidonation.component';

describe('InfoCovidonationComponent', () => {
  let component: InfoCovidonationComponent;
  let fixture: ComponentFixture<InfoCovidonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCovidonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCovidonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
