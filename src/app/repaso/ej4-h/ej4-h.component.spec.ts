import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej4HComponent } from './ej4-h.component';

describe('Ej4HComponent', () => {
  let component: Ej4HComponent;
  let fixture: ComponentFixture<Ej4HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej4HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej4HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
