import { Routes } from '@angular/router';
import { CoursePageComponent } from './course-page/course-page.component';
import { CourseSchemaComponent } from './course-schema/course-schema.component';

export const routes: Routes = [
    {path: "kurser", component: CoursePageComponent},
    {path: "schema", component: CourseSchemaComponent},
    {path: '', redirectTo: '/kurser', pathMatch: 'full'},
    {path: '**', redirectTo: '/kurser', pathMatch: 'full'}
];

