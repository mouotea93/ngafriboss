import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseJobComponent } from './entreprise-job.component';

describe('EntrepriseJobComponent', () => {
  let component: EntrepriseJobComponent;
  let fixture: ComponentFixture<EntrepriseJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseJobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
