import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio6PComponent } from './ejercicio6-p.component';

describe('Ejercicio6PComponent', () => {
  let component: Ejercicio6PComponent;
  let fixture: ComponentFixture<Ejercicio6PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio6PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio6PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
