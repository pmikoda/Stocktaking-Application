import {Component} from 'angular2/core'
import {AuthorsService} from '../Services/authors.service'

@Component({
    selector: 'authors',
    template: `
        <h2>Authors</h2>
        {{title}}
        <ul>
            <li *ngFor="#author of authors" >
                {{ author }}
            </li>
        </ul>
        `,
        providers: [AuthorsService]
})
export class AuthorsComponent {
    title = "Authors of the website";
    authors: string[];
    constructor(authorService: AuthorsService){ //dependency injection
        this.authors = authorService.getAuthors();
    }
}