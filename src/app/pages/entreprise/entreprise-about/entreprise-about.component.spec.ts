import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseAboutComponent } from './entreprise-about.component';

describe('EntrepriseAboutComponent', () => {
  let component: EntrepriseAboutComponent;
  let fixture: ComponentFixture<EntrepriseAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
