import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { ContactFormComponent } from './contact-form-component';
import { SignUpFormComponent } from './signup-form.component';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
                <h1>Stocktaking Application</h1>
                <button type="button"
                    class="btn btn-primary">Submit
                </button>
                <courses></courses>
                <authors></authors>
                <contact-form></contact-form>
                <signup-form></signup-form>
                <input id="search" type="text" class="form-control" placeholder="Search">
            `,
    directives: [CoursesComponent, AuthorsComponent, ContactFormComponent, SignUpFormComponent]
})
export class AppComponent {
    constructor() {

        var keyups = Observable.fromEvent($("#search"), "keyup")
            .map(e => e.target.value)
            .filter(text => text.length >= 3)
            .debounceTime(400); 
            
        keyups.subscribe(data => console.log(data));

    }

}