import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio9HComponent } from './ejercicio9-h.component';

describe('Ejercicio9HComponent', () => {
  let component: Ejercicio9HComponent;
  let fixture: ComponentFixture<Ejercicio9HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio9HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio9HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
