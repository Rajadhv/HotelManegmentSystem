import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwenerComponent } from './owener.component';

describe('OwenerComponent', () => {
  let component: OwenerComponent;
  let fixture: ComponentFixture<OwenerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwenerComponent]
    });
    fixture = TestBed.createComponent(OwenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
