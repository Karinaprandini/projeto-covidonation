import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoConhecaComponent } from './info-conheca.component';

describe('InfoConhecaComponent', () => {
  let component: InfoConhecaComponent;
  let fixture: ComponentFixture<InfoConhecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoConhecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoConhecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
