import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { CourseSearchService } from '../services/course-search.service';
import { FormsModule } from '@angular/forms';




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

  //Sökinput
  searchInput: string = "";

  constructor(private courseservice: CourseService, private courseSearchService: CourseSearchService) { }

  ngOnInit() {
    this.courseservice.getCourseData().subscribe(data => {
      this.courseData = data;
      //Hämta totala antal kurser
      this.amountCourses = this.courseData.length;

      this.filteredCourseData = this.courseData.slice(0, 20);
      this.filteredSubjects = this.courseservice.getSubjects(this.courseData)
    })
  }

  searchFilter() {
    //Om sökinput är större än 3 tecken, filtrera
    if (this.searchInput.length >= 3) {
      this.filteredCourseData = this.courseSearchService.applySearchFilter(this.courseData, this.searchInput);
      
    } else {
      this.filteredCourseData = this.courseData.slice(0, 20);
    }


  }




}
