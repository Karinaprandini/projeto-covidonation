import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPixComponent } from './info-pix.component';

describe('InfoPixComponent', () => {
  let component: InfoPixComponent;
  let fixture: ComponentFixture<InfoPixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
