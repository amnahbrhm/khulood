import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudCertComponent } from './stud-cert.component';

describe('StudCertComponent', () => {
  let component: StudCertComponent;
  let fixture: ComponentFixture<StudCertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudCertComponent]
    });
    fixture = TestBed.createComponent(StudCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
