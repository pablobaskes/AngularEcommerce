import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRegisComponent } from './main-regis.component';

describe('MainRegisComponent', () => {
  let component: MainRegisComponent;
  let fixture: ComponentFixture<MainRegisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRegisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRegisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
