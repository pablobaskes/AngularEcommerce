import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio9PComponent } from './ejercicio9-p.component';

describe('Ejercicio9PComponent', () => {
  let component: Ejercicio9PComponent;
  let fixture: ComponentFixture<Ejercicio9PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio9PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio9PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
