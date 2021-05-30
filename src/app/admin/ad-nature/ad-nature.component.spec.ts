import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdNatureComponent } from './ad-nature.component';

describe('AdNatureComponent', () => {
  let component: AdNatureComponent;
  let fixture: ComponentFixture<AdNatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdNatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdNatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
