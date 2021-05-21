import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseBlogComponent } from './entreprise-blog.component';

describe('EntrepriseBlogComponent', () => {
  let component: EntrepriseBlogComponent;
  let fixture: ComponentFixture<EntrepriseBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
