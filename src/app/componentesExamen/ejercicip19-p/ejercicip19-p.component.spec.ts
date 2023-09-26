import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicip19PComponent } from './ejercicip19-p.component';

describe('Ejercicip19PComponent', () => {
  let component: Ejercicip19PComponent;
  let fixture: ComponentFixture<Ejercicip19PComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicip19PComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicip19PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
