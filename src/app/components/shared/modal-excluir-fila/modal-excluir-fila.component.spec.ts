import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExcluirFilaComponent } from './modal-excluir-fila.component';

describe('ModalExcluirFilaComponent', () => {
  let component: ModalExcluirFilaComponent;
  let fixture: ComponentFixture<ModalExcluirFilaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExcluirFilaComponent]
    });
    fixture = TestBed.createComponent(ModalExcluirFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
