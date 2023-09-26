import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio16PComponent } from './ejercicio16-p.component';

describe('Ejercicio16PComponent', () => {
  let component: Ejercicio16PComponent;
  let fixture: ComponentFixture<Ejercicio16PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio16PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio16PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
