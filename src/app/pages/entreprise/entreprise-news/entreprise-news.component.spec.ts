import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseNewsComponent } from './entreprise-news.component';

describe('EntrepriseNewsComponent', () => {
  let component: EntrepriseNewsComponent;
  let fixture: ComponentFixture<EntrepriseNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
