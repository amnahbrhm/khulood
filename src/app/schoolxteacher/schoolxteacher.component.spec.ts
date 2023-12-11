import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolxteacherComponent } from './schoolxteacher.component';

describe('SchoolxteacherComponent', () => {
  let component: SchoolxteacherComponent;
  let fixture: ComponentFixture<SchoolxteacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchoolxteacherComponent]
    });
    fixture = TestBed.createComponent(SchoolxteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
