import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio22HComponent } from './ejercicio22-h.component';

describe('Ejercicio22HComponent', () => {
  let component: Ejercicio22HComponent;
  let fixture: ComponentFixture<Ejercicio22HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio22HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio22HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
