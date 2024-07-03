import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
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


  //url länk ikon
  faLink = faArrowUpRightFromSquare;
  scheduleCourseData: Course[] = [];

  constructor(private scheduleService: ScheduleService, private searchCourseService: CourseSearchService ) { }

  ngOnInit(): void {

    //Hämtar nuvarande schema som är sparad i LocalStorage
    this.scheduleCourseData = this.scheduleService.getCurrentSchedule();

  }

  deleteCourseFromSchedule(courseCode: string) {
    this.scheduleService.deleteCourse(courseCode);
    this.scheduleCourseData = this.scheduleService.getCurrentSchedule();

  }

  courseTotalPoints(): number {
    let totalPoints: number = 0;

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
