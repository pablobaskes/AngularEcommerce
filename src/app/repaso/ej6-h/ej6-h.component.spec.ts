import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej6HComponent } from './ej6-h.component';

describe('Ej6HComponent', () => {
  let component: Ej6HComponent;
  let fixture: ComponentFixture<Ej6HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej6HComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej6HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
