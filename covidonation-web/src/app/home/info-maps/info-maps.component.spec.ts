import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMapsComponent } from './info-maps.component';

describe('InfoMapsComponent', () => {
  let component: InfoMapsComponent;
  let fixture: ComponentFixture<InfoMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
