import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelControleSenhasComponent } from './painel-controle-senhas.component';

describe('PainelControleSenhasComponent', () => {
  let component: PainelControleSenhasComponent;
  let fixture: ComponentFixture<PainelControleSenhasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelControleSenhasComponent]
    });
    fixture = TestBed.createComponent(PainelControleSenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
