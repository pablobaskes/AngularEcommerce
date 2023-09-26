import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVinosComponent } from './main-vinos.component';

describe('MainVinosComponent', () => {
  let component: MainVinosComponent;
  let fixture: ComponentFixture<MainVinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainVinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
