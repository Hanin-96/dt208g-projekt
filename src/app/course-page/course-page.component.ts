import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {
  //Initierar till tom array från interface
  courseData: Course[] = [];

  constructor(private courseservice : CourseService) {}

  ngOnInit() {
    this.courseservice.getCourseData().subscribe(data => {
      this.courseData = data;
    })
  }
}
