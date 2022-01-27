import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigosFormComponent } from './amigos-form.component';

describe('AmigosFormComponent', () => {
  let component: AmigosFormComponent;
  let fixture: ComponentFixture<AmigosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmigosFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
