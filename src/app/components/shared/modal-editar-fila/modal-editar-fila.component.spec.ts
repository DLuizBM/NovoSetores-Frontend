import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarFilaComponent } from './modal-editar-fila.component';

describe('ModalEditarFilaComponent', () => {
  let component: ModalEditarFilaComponent;
  let fixture: ComponentFixture<ModalEditarFilaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarFilaComponent]
    });
    fixture = TestBed.createComponent(ModalEditarFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
