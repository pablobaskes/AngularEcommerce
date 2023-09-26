import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio19HComponent } from './ejercicio19-h.component';

describe('Ejercicio19HComponent', () => {
  let component: Ejercicio19HComponent;
  let fixture: ComponentFixture<Ejercicio19HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio19HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio19HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
