import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej4PComponent } from './ej4-p.component';

describe('Ej4PComponent', () => {
  let component: Ej4PComponent;
  let fixture: ComponentFixture<Ej4PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej4PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej4PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
