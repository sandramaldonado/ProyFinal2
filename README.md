# LandingMasterSales

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.6.

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


Git Initial Commands


Command line instructions
You can also upload existing files from your computer using the instructions below.


Git global setup
git config --global user.name "Cristhian Emerson Valencia Felipez"
git config --global user.email "cristhian.valencia@nuevatel.com"

Create a new repository
git clone http://10.40.20.87/spdev/landing-page-master-sales-frontend.git
cd landing-page-master-sales-frontend
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

Push an existing folder
cd existing_folder
git init
git remote add origin http://10.40.20.87/spdev/landing-page-master-sales-frontend.git
git add .
git commit -m "Initial commit"
git push -u origin master

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin http://10.40.20.87/spdev/landing-page-master-sales-frontend.git
git push -u origin --all
git push -u origin --tags