import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej5Component } from './ej5.component';

describe('Ej5Component', () => {
  let component: Ej5Component;
  let fixture: ComponentFixture<Ej5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
