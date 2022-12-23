import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondInputComponent } from './second-input.component';

describe('SecondInputComponent', () => {
  let component: SecondInputComponent;
  let fixture: ComponentFixture<SecondInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
