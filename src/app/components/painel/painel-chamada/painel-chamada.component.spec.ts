import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelChamadaComponent } from './painel-chamada.component';

describe('PainelChamadaComponent', () => {
  let component: PainelChamadaComponent;
  let fixture: ComponentFixture<PainelChamadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PainelChamadaComponent]
    });
    fixture = TestBed.createComponent(PainelChamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
