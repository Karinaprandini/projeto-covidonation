import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbadoeComponent } from './abadoe.component';

describe('AbadoeComponent', () => {
  let component: AbadoeComponent;
  let fixture: ComponentFixture<AbadoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbadoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbadoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
