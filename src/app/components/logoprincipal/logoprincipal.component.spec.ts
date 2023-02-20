import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGOPRINCIPALComponent } from './logoprincipal.component';

describe('LOGOPRINCIPALComponent', () => {
  let component: LOGOPRINCIPALComponent;
  let fixture: ComponentFixture<LOGOPRINCIPALComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOGOPRINCIPALComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LOGOPRINCIPALComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
