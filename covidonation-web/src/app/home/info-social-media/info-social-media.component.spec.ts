import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSocialMediaComponent } from './info-social-media.component';

describe('InfoSocialMediaComponent', () => {
  let component: InfoSocialMediaComponent;
  let fixture: ComponentFixture<InfoSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSocialMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
