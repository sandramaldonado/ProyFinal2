# LandingMasterSalesFrontend  

Angular CLI: 14.0.0 (npm i -g  @angular/cli@14.0.0)
Node: 14.15.0
Package Manager: npm 6.14.8 
OS: darwin x64

Angular: 14.0.0
... animations, cdk, cli, common, compiler, compiler-cli, core
... forms, google-maps, material, platform-browser
... platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1400.0
@angular-devkit/build-angular   14.0.0
@angular-devkit/core            14.0.0
@angular-devkit/schematics      14.0.0
@schematics/angular             14.0.0
rxjs                            7.5.5
typescript                      4.6.4

##comandos docker 
#crear imagen local : iniciar desde la carpeta de la landing donde se encuentra el Dockerfile
docker build -t landing-master-sales-frontend:v1.0.0 -f ./Dockerfile .
docker run -p 8000:80 landing-master-sales-frontend:v1.0.0

## ejecutar imagen desde terminal para usar la imagen en el registry de GitLab
# Logearse al Registry de Gitlab
docker login registry-gitlab.nuevatel.com
docker build -t registry-gitlab.nuevatel.com/spdev/landing-page-master-sales-frontend .
# Ejecutar el container con la imagen de Giitlab

docker run -p 4200:80 registry-gitlab.nuevatel.com/spdev/landing-page-master-sales-frontend


docker push registry-gitlab.nuevatel.com/spdev/landing-page-master-sales-frontend

## Correr la aplicacion en ambiente de desarrollo local

Run: `npm run local` vfor a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Generar Componentes:
   - ng generate module pages/module-name --routing
   - ng generate component pages/component-name

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).



## Git Configuration

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



## Deprecated 07/06/2022 Razon: Actualizacion de version de Angular de v13 a v14 para utilizar @angular/google-maps
/****************************
Angular CLI: 13.3.5
Node: 12.22.10
Package Manager: npm 6.14.16
OS: darwin x64

Angular: 13.3.8
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.5
@angular-devkit/build-angular   13.3.5
@angular-devkit/core            13.3.5
@angular-devkit/schematics      13.3.5
@angular/cli                    13.3.5
@schematics/angular             13.3.5
rxjs                            7.5.5
typescript                      4.6.4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

***************************************/
