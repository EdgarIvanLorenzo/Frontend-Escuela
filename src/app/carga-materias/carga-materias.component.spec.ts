import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaMateriasComponent } from './carga-materias.component';

describe('CargaMateriasComponent', () => {
  let component: CargaMateriasComponent;
  let fixture: ComponentFixture<CargaMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaMateriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
