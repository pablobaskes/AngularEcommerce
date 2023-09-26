import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio6HComponent } from './ejercicio6-h.component';

describe('Ejercicio6HComponent', () => {
  let component: Ejercicio6HComponent;
  let fixture: ComponentFixture<Ejercicio6HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio6HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio6HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
