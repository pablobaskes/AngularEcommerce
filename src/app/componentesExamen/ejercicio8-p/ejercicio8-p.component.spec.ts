import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio8PComponent } from './ejercicio8-p.component';

describe('Ejercicio8PComponent', () => {
  let component: Ejercicio8PComponent;
  let fixture: ComponentFixture<Ejercicio8PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio8PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio8PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
