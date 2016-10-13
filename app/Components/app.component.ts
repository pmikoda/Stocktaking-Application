import { Component } from 'angular2/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { ContactFormComponent } from './contact-form-component'
import { SignUpFormComponent } from './signup-form.component'

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
            `,
    directives: [CoursesComponent, AuthorsComponent, ContactFormComponent, SignUpFormComponent]
})
export class AppComponent {

}