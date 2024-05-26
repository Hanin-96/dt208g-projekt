import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { CourseSearchService } from '../services/course-search.service';
import { FormsModule } from '@angular/forms';
import { ScheduleService } from '../services/schedule.service';




@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {

  //Initierar till tom array från interface
  courseData: Course[] = [];

  filteredSubjects: string[] = [];
  amountCourses: number = 0;

  filteredCourseData: Course[] = [];

  faLink = faArrowUpRightFromSquare;

  //variabel för filtrering av ämnesområden
  selectSubject: string = "";

  //Sökinput
  searchInput: string = "";

  constructor(private courseService: CourseService, private courseSearchService: CourseSearchService, private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.courseService.getCourseData().subscribe(data => {
      this.courseData = data;
      //Hämta totala antal kurser
      this.amountCourses = this.courseData.length;

      this.filteredCourseData = this.courseData.slice(0, 50);
      this.filteredSubjects = this.courseService.getSubjects(this.courseData)
    })
  }

  searchFilter(): void {
    console.log(this.selectSubject);
    //Om sökinput är större än 3 tecken eller subject inte är tom, filtrera
    if (this.searchInput.length >= 3 || this.selectSubject != "") {
      this.filteredCourseData = this.courseSearchService.applySearchFilter(this.courseData, this.searchInput);

      //Filtrera vidare efter ämne
      this.filteredCourseData = this.courseSearchService.applySubjectOption(this.filteredCourseData, this.selectSubject);


    } else {
      this.filteredCourseData = this.courseData.slice(0, 20);
    }
  }

  //Sortera efter code, coursename och points
  sort(type: string): void {
    this.filteredCourseData = this.courseSearchService.sortCourseData(this.filteredCourseData, type)
  }

  saveCourseToSchedule(saveCourse: Course) {
    this.scheduleService.addCourse(saveCourse)
    }

    isCourseAdded(courseCode:string):boolean {
      return this.scheduleService.containedCourse(courseCode);
    }



  







}

