import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlkButtonComponent } from './blk-button.component';

describe('BlkButtonComponent', () => {
  let component: BlkButtonComponent;
  let fixture: ComponentFixture<BlkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlkButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
