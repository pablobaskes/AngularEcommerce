import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio8HComponent } from './ejercicio8-h.component';

describe('Ejercicio8HComponent', () => {
  let component: Ejercicio8HComponent;
  let fixture: ComponentFixture<Ejercicio8HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio8HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio8HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
