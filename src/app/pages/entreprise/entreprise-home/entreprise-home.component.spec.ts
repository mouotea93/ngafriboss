import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseHomeComponent } from './entreprise-home.component';

describe('EntrepriseHomeComponent', () => {
  let component: EntrepriseHomeComponent;
  let fixture: ComponentFixture<EntrepriseHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
