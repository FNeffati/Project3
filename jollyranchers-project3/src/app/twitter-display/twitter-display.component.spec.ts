import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterDisplayComponent } from './twitter-display.component';

describe('TwitterDisplayComponent', () => {
  let component: TwitterDisplayComponent;
  let fixture: ComponentFixture<TwitterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
