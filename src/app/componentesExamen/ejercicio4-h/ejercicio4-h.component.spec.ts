import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio4HComponent } from './ejercicio4-h.component';

describe('Ejercicio4HComponent', () => {
  let component: Ejercicio4HComponent;
  let fixture: ComponentFixture<Ejercicio4HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio4HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio4HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
