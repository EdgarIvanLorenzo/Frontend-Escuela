import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoAlumnosComponent } from './grupo-alumnos.component';

describe('GrupoAlumnosComponent', () => {
  let component: GrupoAlumnosComponent;
  let fixture: ComponentFixture<GrupoAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoAlumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
