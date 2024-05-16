import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSchemaComponent } from './course-schema.component';

describe('CourseSchemaComponent', () => {
  let component: CourseSchemaComponent;
  let fixture: ComponentFixture<CourseSchemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSchemaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
