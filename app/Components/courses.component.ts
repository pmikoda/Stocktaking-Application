import {Component} from 'angular2/core'
import {CourseService} from '../Services/course.service'
import {AutoGrowDirective} from '../Directives/auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{title}}
        <input [(ngModel)]="text" type="text" autoGrow />
        <ul>
            <li *ngFor="#course of courses" >
                {{ course}}
            </li>
        </ul>
        `,
        providers: [CourseService],
        directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "The title of page";
    courses;
    constructor(courseService: CourseService){ //dependency injection
        this.courses = courseService.getCourses();
    }
}