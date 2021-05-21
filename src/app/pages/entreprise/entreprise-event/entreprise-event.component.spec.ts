import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseEventComponent } from './entreprise-event.component';

describe('EntrepriseEventComponent', () => {
  let component: EntrepriseEventComponent;
  let fixture: ComponentFixture<EntrepriseEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
