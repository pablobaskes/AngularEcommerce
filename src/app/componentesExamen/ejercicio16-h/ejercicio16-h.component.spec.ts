import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio16HComponent } from './ejercicio16-h.component';

describe('Ejercicio16HComponent', () => {
  let component: Ejercicio16HComponent;
  let fixture: ComponentFixture<Ejercicio16HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio16HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio16HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
