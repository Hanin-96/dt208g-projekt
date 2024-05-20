import { TestBed } from '@angular/core/testing';

import { CourseSearchService } from './course-search.service';

describe('CourseSearchService', () => {
  let service: CourseSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
