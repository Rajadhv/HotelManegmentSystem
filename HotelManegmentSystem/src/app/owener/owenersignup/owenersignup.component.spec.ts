import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwenersignupComponent } from './owenersignup.component';

describe('OwenersignupComponent', () => {
  let component: OwenersignupComponent;
  let fixture: ComponentFixture<OwenersignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwenersignupComponent]
    });
    fixture = TestBed.createComponent(OwenersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
