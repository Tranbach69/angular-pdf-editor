import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeoThaComponent } from './keo-tha.component';

describe('KeoThaComponent', () => {
  let component: KeoThaComponent;
  let fixture: ComponentFixture<KeoThaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeoThaComponent]
    });
    fixture = TestBed.createComponent(KeoThaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
