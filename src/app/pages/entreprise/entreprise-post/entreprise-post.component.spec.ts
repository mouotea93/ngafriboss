import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprisePostComponent } from './entreprise-post.component';

describe('EntreprisePostComponent', () => {
  let component: EntreprisePostComponent;
  let fixture: ComponentFixture<EntreprisePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreprisePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreprisePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
