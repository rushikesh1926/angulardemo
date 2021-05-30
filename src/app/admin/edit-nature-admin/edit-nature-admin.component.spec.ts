import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNatureAdminComponent } from './edit-nature-admin.component';

describe('EditNatureAdminComponent', () => {
  let component: EditNatureAdminComponent;
  let fixture: ComponentFixture<EditNatureAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNatureAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNatureAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
