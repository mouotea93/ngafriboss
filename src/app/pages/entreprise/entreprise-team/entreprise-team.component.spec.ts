import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseTeamComponent } from './entreprise-team.component';

describe('EntrepriseTeamComponent', () => {
  let component: EntrepriseTeamComponent;
  let fixture: ComponentFixture<EntrepriseTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
