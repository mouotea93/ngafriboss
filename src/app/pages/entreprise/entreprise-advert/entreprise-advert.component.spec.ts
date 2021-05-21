import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseAdvertComponent } from './entreprise-advert.component';

describe('EntrepriseAdvertComponent', () => {
  let component: EntrepriseAdvertComponent;
  let fixture: ComponentFixture<EntrepriseAdvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseAdvertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
