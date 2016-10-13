import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: `
                <h1>Stocktaking Application</h1>
                <button type="button"
                    class="btn btn-primary">Submit
                </button>
                <courses></courses>
                <authors></authors>
            `,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { 

}