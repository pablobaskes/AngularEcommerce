import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio14HComponent } from './ejercicio14-h.component';

describe('Ejercicio14HComponent', () => {
  let component: Ejercicio14HComponent;
  let fixture: ComponentFixture<Ejercicio14HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio14HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio14HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
