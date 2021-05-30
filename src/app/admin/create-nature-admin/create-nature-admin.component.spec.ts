import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNatureAdminComponent } from './create-nature-admin.component';

describe('CreateNatureAdminComponent', () => {
  let component: CreateNatureAdminComponent;
  let fixture: ComponentFixture<CreateNatureAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNatureAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNatureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
