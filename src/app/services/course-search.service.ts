import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseSearchService {

  //Boolean för asc eller desc
  isAsc: boolean = true;

  constructor() { }
  //Sökfunktion service som filtrerar utifrån sökinput på kurskod och kursnamn
  applySearchFilter(courseData: Course[], searchValue: string): Course[] {
    //Funktion tar emot courseData och sökinput
    return courseData.filter((course) => {
      return course.courseCode.toLowerCase().includes(searchValue.toLowerCase())
        || course.courseName.toLowerCase().includes(searchValue.toLowerCase())

    });
  }

  //Filtrera utifrån ämnesområden
  applySubjectOption(filteredCourseData: Course[], selectSubject: string): Course[] {
    if (selectSubject == "") {
      return filteredCourseData;
    }
    else {
      return filteredCourseData.filter((course) => {
        return course.subject.toLowerCase() === selectSubject.toLowerCase()

      });
    }

  }

  //Sortera utifrån kurskod, kursnamn, poäng & ämnesområden
  sortCourseData(filteredCourseData: Course[], type: string): Course[] {
    if (this.isAsc == true) {
      //isAsc boolean sätts till false inför nästa click
      this.isAsc = false;
      return this.sortCourseDataAsc(filteredCourseData, type);

    } else {
      //isAsc boolean sätts till true inför nästa click
      this.isAsc = true;
      return this.sortCourseDataDesc(filteredCourseData, type);
    }

  }
  private sortCourseDataAsc(filteredCourseData: Course[], type: string): Course[] {
    return filteredCourseData.sort((courseA, courseB) => {
      switch (type) {
        case 'courseCode':
          return courseA.courseCode.localeCompare(courseB.courseCode);

        case 'courseName':
          return courseA.courseName.localeCompare(courseB.courseName);

        case 'points':
          return courseA.points - courseB.points;

        case 'subject':
          return courseA.subject.localeCompare(courseB.subject);

        default:
          return 0;
      }


    });
  }

  
  private sortCourseDataDesc(filteredCourseData: Course[], type: string): Course[] {
    return filteredCourseData.sort((courseA, courseB) => {
      switch (type) {
        case 'courseCode':
          return courseB.courseCode.localeCompare(courseA.courseCode);

        case 'courseName':
          return courseB.courseName.localeCompare(courseA.courseName);

        case 'points':
          return courseB.points - courseA.points;

        case 'subject':
          return courseB.subject.localeCompare(courseA.subject);

        default:
          return 0;
      }


    });
  }




}
