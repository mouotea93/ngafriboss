import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseArticleEditComponent } from './entreprise-article-edit.component';

describe('EntrepriseArticleEditComponent', () => {
  let component: EntrepriseArticleEditComponent;
  let fixture: ComponentFixture<EntrepriseArticleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseArticleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseArticleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
