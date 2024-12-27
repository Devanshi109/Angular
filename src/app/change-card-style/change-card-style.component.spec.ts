import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCardStyleComponent } from './change-card-style.component';

describe('ChangeCardStyleComponent', () => {
  let component: ChangeCardStyleComponent;
  let fixture: ComponentFixture<ChangeCardStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeCardStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeCardStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
