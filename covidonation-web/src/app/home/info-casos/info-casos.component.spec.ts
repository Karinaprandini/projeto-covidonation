import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCasosComponent } from './info-casos.component';

describe('InfoCasosComponent', () => {
  let component: InfoCasosComponent;
  let fixture: ComponentFixture<InfoCasosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCasosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCasosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
