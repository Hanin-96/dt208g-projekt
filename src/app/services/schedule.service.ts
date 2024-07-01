import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private currentSchedule: Course[] = [];

  constructor() {
    this.getSavedCourse();
  }

  addCourse(course: Course): void {
    this.currentSchedule.push(course);
    let savedSchedule = JSON.stringify(this.currentSchedule)
    localStorage.setItem("schedule", savedSchedule);
  }

  //Ta bort kurs
  deleteCourse(courseCode: string): void {
    this.currentSchedule = this.currentSchedule.filter((course) => {
      return course.courseCode != courseCode;
    });
    let savedSchedule = JSON.stringify(this.currentSchedule)
    localStorage.setItem("schedule", savedSchedule);
  }

  //Hämta sparade kurs
  getSavedCourse(): void {

    let getCourse = localStorage.getItem("schedule") as string;


    if (getCourse && getCourse != "") {
      this.currentSchedule = JSON.parse(getCourse);

    } else {
      this.currentSchedule = [];
    }

  }

  //Hämta nuvarande schemat 
  getCurrentSchedule(): Course[] {
    return this.currentSchedule;
  }

  //Kollar om kursen finns sparad i sparade schemat
  containedCourse(courseCode: string): boolean {
    return this.currentSchedule.some(course => course.courseCode === courseCode);
  }
}
