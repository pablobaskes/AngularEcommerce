import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio4PComponent } from './ejercicio4-p.component';

describe('Ejercicio4PComponent', () => {
  let component: Ejercicio4PComponent;
  let fixture: ComponentFixture<Ejercicio4PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio4PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio4PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
