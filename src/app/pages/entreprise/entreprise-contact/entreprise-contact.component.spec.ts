import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseContactComponent } from './entreprise-contact.component';

describe('EntrepriseContactComponent', () => {
  let component: EntrepriseContactComponent;
  let fixture: ComponentFixture<EntrepriseContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
