import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  //Property, API hämtas från url
  private url: string = "https://matdah.github.io/DT208G---Programmering-i-TypeScript/Moment%205%20-%20Projekt/miun_courses.json";

  constructor(private http: HttpClient) { }

  getCourseData(): Observable<Course[]> {

    //http anrop
    return this.http.get<Course[]>(this.url);
  }

  //Hämta och ta bort dubletter av ämnesområden
  getSubjects(courseData: Course[]): string[] {
    let uniqueSubjects: string[] = [];
    courseData.forEach((course) => {
      if (uniqueSubjects.includes(course.subject) == false) {
        uniqueSubjects.push(course.subject);
      }

    });
    return uniqueSubjects;
  }
}
