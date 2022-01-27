import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigoListItemComponent } from './amigo-list-item.component';

describe('AmigoListItemComponent', () => {
  let component: AmigoListItemComponent;
  let fixture: ComponentFixture<AmigoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmigoListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
