import { Component, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { CourseSearchService } from '../services/course-search.service';
import { FormsModule } from '@angular/forms';
import { ScheduleService } from '../services/schedule.service';
import { PageEvent, MatPaginatorModule, MatPaginator } from '@angular/material/paginator';




@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FormsModule, MatPaginatorModule],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {

  //Initierar till tom array från interface
  courseData: Course[] = [];
  filteredCourseData: Course[] = [];
  paginatedCourseData: Course[] = [];

  filteredSubjects: string[] = [];
  amountCourses: number = 0;

  faLink = faArrowUpRightFromSquare;

  //variabel för filtrering av ämnesområden
  selectSubject: string = "";

  //Sökinput
  searchInput: string = "";

  //Paginering
  pageIndex: number = 0;
  length: number = 0;
  pageEvent: PageEvent | undefined;
  pageSize: number = 20;

  //För att komma åt inbyggda funktioner i mat-paginator
  @ViewChild('paginator')
  matPaginator: MatPaginator | undefined;

  constructor(private courseService: CourseService, private courseSearchService: CourseSearchService, private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.courseService.getCourseData().subscribe(data => {
      this.courseData = data;
      //Hämta totala antal kurser
      this.amountCourses = this.courseData.length;

      this.filteredCourseData = this.courseData;
      this.paginatedCourseData = this.filteredCourseData.slice(0, this.pageSize);
      this.filteredSubjects = this.courseService.getSubjects(this.courseData);

      //Sätter totala längden för pagnering
      this.length = this.courseData.length;

      //console.log(this.courseData);
    })
  }

  searchFilter(): void {
    //console.log(this.selectSubject);
    //Om sökinput är större än 3 tecken eller subject inte är tom, filtrera
    if (this.searchInput.length >= 3 || this.selectSubject != "") {
      this.filteredCourseData = this.courseSearchService.applySearchFilter(this.courseData, this.searchInput);

      //Filtrera vidare efter ämne
      this.filteredCourseData = this.courseSearchService.applySubjectOption(this.filteredCourseData, this.selectSubject);


    } else {
      this.filteredCourseData = this.courseData;
    }
    
    // Ändrar längd utifrån längden på data som filtreras för paginering
    this.length = this.filteredCourseData.length;
    this.matPaginator?.firstPage();
    this.paginatedCourseData = this.filteredCourseData.slice(0, this.pageSize);
  }

  //Sortera efter code, coursename och points
  sort(type: string): void {
    this.paginatedCourseData = this.courseSearchService.sortCourseData(this.paginatedCourseData, type);
  }

  saveCourseToSchedule(saveCourse: Course) {
    this.scheduleService.addCourse(saveCourse);
  }

  isCourseAdded(courseCode: string): boolean {
    return this.scheduleService.containedCourse(courseCode);
  }

  //Paginering
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageIndex = e.pageIndex;
    if (this.pageIndex == 0) {
      this.paginatedCourseData = this.filteredCourseData.slice(0, this.pageSize);
    } else {
      //Räknar ut startindex och slutindex för varje sida
      let startIndex = this.pageIndex * this.pageSize;
      let endIndex = (this.pageIndex + 1) * (this.pageSize);

      //presenterar data utifrån start och slutindex
      this.paginatedCourseData = this.filteredCourseData.slice(startIndex, endIndex);
 
    }

  }











}

