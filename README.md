# XelloTooltip

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

# Objective

Create a single page Angular 4+ app with simple routing that has one state/view. In it, place two buttons that when clicked, show a tooltip above the button with some text in it. 
When button A is clicked, if button B’s tooltip is open it should close and vice versa - only one tooltip should be visible at a time. Either tooltip should close when clicked anywhere outside of it, but remain open if clicked inside. Either tooltip should close when ESC key is pressed.

# Implementation

Tooltip functionality should be written as a reusable component or directive. Please do not use any existing plugins.
You are encouraged to use the Angular CLI or a starter/seed project to save time scaffolding
You can organize the files/folders in any way
The reviewer should be able to run your solution with a simple npm command
You should submit your solution as a github repository link

# Bonus

If you scroll down to an open tooltip it should detect being at the edge of the screen and change position to be below the button +++

Style using either Bootstrap sass or SCSS BEM ++

Add at least one accessibility feature +

Design and style the app so that it is responsive +

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
