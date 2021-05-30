import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdWildlifeComponent } from './ad-wildlife.component';

describe('AdWildlifeComponent', () => {
  let component: AdWildlifeComponent;
  let fixture: ComponentFixture<AdWildlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdWildlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdWildlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
