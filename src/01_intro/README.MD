# Angular notes:

When creating a new app with Angular Cli, avoid using 'test' in the name

```sh
$ng new my-first-app --no-strict
```

Enter into the folder and run:

```sh
$ng serve
```

It'll bring up a dev server, run and build your app

A component, always has:

- a template (html code),
- css(possible)
- typescript file -> (The definition of the component)

## Directive

```html
[(ngModel)]="name"
```

This tells Angular to listen to anything you enter in the input and store it in that "name" model
Also output the "name" model in this input

## \*.module.ts

Tells Angular which pieces belong to our app.
import { FormsModule } from '@angular/forms'; --> Typescript feature

## Angular concepts:

- Components: Angular is built based on Components
- DataBinding: Puts data in your DOM in the end Or react to user's events.
- Directives: Helpers instructions in you template(html) e.g. ngModel
- Services and Dependency Injection:
- Pipes: Makes it easy to transform the output, displayed in the template at run-time.

## Bootstrap CSS framework

To have a nice CSS style out of the box, we'll use Bootstrap CSS framework:

1. Install it locally in this project(not globally).

```sh
$npm install --save bootstrap@3
```

2. Configure CLI project: in **angular.json**, in **projects.{app}.architect.build.options.styles** add another import:

   ```json
   "styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "src/styles.css"
   ],
   ```

3. re-run: **$ng serve**

## Troubleshooting:

You can disable strict mode by setting strict: false in your tsconfig.json file.
