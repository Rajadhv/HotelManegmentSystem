import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwenersuccesComponent } from './owenersucces.component';

describe('OwenersuccesComponent', () => {
  let component: OwenersuccesComponent;
  let fixture: ComponentFixture<OwenersuccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwenersuccesComponent]
    });
    fixture = TestBed.createComponent(OwenersuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
