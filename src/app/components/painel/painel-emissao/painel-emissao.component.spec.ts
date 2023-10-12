import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEmissaoComponent } from './painel-emissao.component';

describe('PainelEmissaoComponent', () => {
  let component: PainelEmissaoComponent;
  let fixture: ComponentFixture<PainelEmissaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelEmissaoComponent]
    });
    fixture = TestBed.createComponent(PainelEmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
