import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cir1Component } from './cir1.component';

describe('Cir1Component', () => {
  let component: Cir1Component;
  let fixture: ComponentFixture<Cir1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cir1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cir1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
