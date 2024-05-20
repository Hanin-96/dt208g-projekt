import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseSearchService {

  constructor() { }
//Sökfunktion service som filtrerar utifrån sökinput på kurskod och kursnamn
  applySearchFilter(courseData:Course[], searchValue: string): Course[] {
    //Funktion tar emot courseData och sökinput
    return courseData.filter((course) => {
      return course.courseCode.toLowerCase().includes(searchValue.toLowerCase())
        || course.courseName.toLowerCase().includes(searchValue.toLowerCase())

    });
  }
}
