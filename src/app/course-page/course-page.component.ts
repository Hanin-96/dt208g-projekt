import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {
  //Initierar till tom array från interface
  courseData: Course[] = [];
  filteredSubjects: string[] = [];
  amountCourses: number = 0;

  faLink = faArrowUpRightFromSquare;

  constructor(private courseservice: CourseService) { }

  ngOnInit() {
    this.courseservice.getCourseData().subscribe(data => {
      this.courseData = data;
      this.courseData = this.courseData.slice(0, 20);
      this.filteredSubjects = this.courseservice.getSubjects(this.courseData)

      //Hämta totala antal kurser
      this.amountCourses = this.courseData.length;


    })
  }




}
