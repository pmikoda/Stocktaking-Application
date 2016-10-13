import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators } from 'angular2/common';
import { UsernameValidators } from '../Validators/usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/Html/signup-form.component.html'
})
export class SignUpFormComponent {
    form = new ControlGroup({
        username: new Control('', Validators.required),
        password: new Control('', Validators.required)
    });

    signup() {
        console.log(this.form.value);
    }
}