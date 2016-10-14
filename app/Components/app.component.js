System.register(['angular2/core', './courses.component', './authors.component', './contact-form-component', './signup-form.component', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, courses_component_1, authors_component_1, contact_form_component_1, signup_form_component_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (contact_form_component_1_1) {
                contact_form_component_1 = contact_form_component_1_1;
            },
            function (signup_form_component_1_1) {
                signup_form_component_1 = signup_form_component_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    var keyups = Rx_1.Observable.fromEvent($("#search"), "keyup")
                        .map(function (e) { return e.target.value; })
                        .filter(function (text) { return text.length >= 3; })
                        .debounceTime(400);
                    keyups.subscribe(function (data) { return console.log(data); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n                <h1>Stocktaking Application</h1>\n                <button type=\"button\"\n                    class=\"btn btn-primary\">Submit\n                </button>\n                <courses></courses>\n                <authors></authors>\n                <contact-form></contact-form>\n                <signup-form></signup-form>\n                <input id=\"search\" type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            ",
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, contact_form_component_1.ContactFormComponent, signup_form_component_1.SignUpFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map