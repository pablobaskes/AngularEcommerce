import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio14PComponent } from './ejercicio14-p.component';

describe('Ejercicio14PComponent', () => {
  let component: Ejercicio14PComponent;
  let fixture: ComponentFixture<Ejercicio14PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio14PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio14PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
