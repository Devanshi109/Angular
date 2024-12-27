import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleColorChangeComponent } from './title-color-change.component';

describe('TitleColorChangeComponent', () => {
  let component: TitleColorChangeComponent;
  let fixture: ComponentFixture<TitleColorChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleColorChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleColorChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
