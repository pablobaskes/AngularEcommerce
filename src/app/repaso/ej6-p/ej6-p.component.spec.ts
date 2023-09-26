import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej6PComponent } from './ej6-p.component';

describe('Ej6PComponent', () => {
  let component: Ej6PComponent;
  let fixture: ComponentFixture<Ej6PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ej6PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ej6PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
