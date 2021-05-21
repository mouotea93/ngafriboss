import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseGalerieComponent } from './entreprise-galerie.component';

describe('EntrepriseGalerieComponent', () => {
  let component: EntrepriseGalerieComponent;
  let fixture: ComponentFixture<EntrepriseGalerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseGalerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseGalerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
