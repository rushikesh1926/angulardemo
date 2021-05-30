import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdFashionComponent } from './ad-fashion.component';

describe('AdFashionComponent', () => {
  let component: AdFashionComponent;
  let fixture: ComponentFixture<AdFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdFashionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
