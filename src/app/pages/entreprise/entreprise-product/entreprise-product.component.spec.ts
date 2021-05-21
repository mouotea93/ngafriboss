import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseProductComponent } from './entreprise-product.component';

describe('EntrepriseProductComponent', () => {
  let component: EntrepriseProductComponent;
  let fixture: ComponentFixture<EntrepriseProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
