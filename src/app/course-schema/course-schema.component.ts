import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../model/course';
import { ScheduleService } from '../services/schedule.service';
import { CourseSearchService } from '../services/course-search.service';


@Component({
  selector: 'app-course-schema',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './course-schema.component.html',
  styleUrl: './course-schema.component.css'
})
export class CourseSchemaComponent {


  //Fontawesome ikoner
  faLink = faArrowUpRightFromSquare;
  faTrash = faTrash;
  
  scheduleCourseData: Course[] = [];

  constructor(private scheduleService: ScheduleService, private searchCourseService: CourseSearchService ) { }

  ngOnInit(): void {

    //Hämtar nuvarande schema som är sparad i LocalStorage
    this.scheduleCourseData = this.scheduleService.getCurrentSchedule();

  }

  //Ta bort kurs från schemat, courseCode motsvarar ett id
  deleteCourseFromSchedule(courseCode: string) {
    //Kallar på funktionen deleteCourse och skickar med kurskoden
    this.scheduleService.deleteCourse(courseCode);
    //Hämtar nya aktuella schemat
    this.scheduleCourseData = this.scheduleService.getCurrentSchedule();

  }

  //Visa totala hp poäng sammanlagt
  courseTotalPoints(): number {
    let totalPoints: number = 0;

    //Den totala poäng är lika med summan när alla kursers poäng läggs ihop
    this.scheduleCourseData.forEach((course) => {
      totalPoints += course.points;
    });
    return totalPoints;
  }

    //Sortera efter code, coursename och points
    sort(type: string): void {
      this.scheduleCourseData = this.searchCourseService.sortCourseData(this.scheduleCourseData, type)
    }


}
