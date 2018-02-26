# DesignApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Install Angular-cli globally
```
npm install -g @angular/cli
```

## Versions
* node: v9.5.0
* Angular CLI: 1.7.1

## Project Goals

* Create an Angular application with Material2 using material design
* Keep unit tests (using `ng test`) up to date and passing
* Record each step of the process in a way that is repeatable
* Use best code and design practices
* Get valued feedback from others

## Development server

Run `ng serve --open` for a dev server and open `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

```
npm install
```


Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy to Github Pages

```
npm i -g angular-cli-ghpages

$ ng build --prod --base-href="https://YOURUSERNAME.github.io/REPO-NAME/"

```

### Setup for deploy
```
$ git add .
$ git commit -m "first commit"
$ git remote add origin git@github.com:yourinfo/yourgit.git
$ git push -u origin master
```

### Deploy to Github Pages
```
$ angular-cli-ghpages
```


# Commands Issued

* nvm use v9 (I am using node version manager to select the version of node)

* ng new design-app --routing --style=scss
* cd design-app
* ng build
* npm install --save hammerjs

# Github Setup
* create repository design-app at https://github.com in your account
* git add .
* git remote add origin git@github.com:spopp/design-app.git
* git push -u origin master

## More Commands - Setup Material2

* npm install --save @angular/material @angular/cdk
* ng generate module --flat app-material
* edit src/app/app-material.module.ts - importing the controls from Material2 that you intend to use
* Edit src/app/app.module.ts - Import
```
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
```
* To imports and exports sections add
```
    BrowserAnimationsModule,
    AppMaterialModule,
```

* Edit index.html
Under the favicon link add
```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

* Edit styles.scss
```
@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';
```

* Edit app.component.html adding a top toolbar and simple menu
```
<div style="text-align:center">

<mat-toolbar color="accent">

  <mat-menu #appMenu="matMenu">
    <button mat-menu-item>Settings</button>
    <button mat-menu-item>Help</button>
  </mat-menu>

  <button mat-icon-button [matMenuTriggerFor]="appMenu">
    <mat-icon>more_vert</mat-icon>
  </button>

  <span>Design App</span>
  <!-- This fills the remaining space of the current row -->
  <span class="app-toolbar-filler"></span>
  <span>Help</span>

</mat-toolbar>

<router-outlet></router-outlet>
```

* Edit app.component.scss
```
.app-toolbar-filler {
  flex: 1 1 auto;
}
```

* Edit app.component.html adding simplified content - until we add router based content

```
<mat-tab-group>
  <mat-tab>
    <ng-template mat-tab-label>
      The <em>best</em> pasta
    </ng-template>
    <h1>Best pasta restaurants</h1>
    <p>...</p>
  </mat-tab>
  <mat-tab>
    <ng-template mat-tab-label>
      <mat-icon>thumb_down</mat-icon> The worst sushi
    </ng-template>
    <h1>Terrible sushi restaurants</h1>
    <p>...</p>
  </mat-tab>
</mat-tab-group>

<mat-card>
  <mat-icon>translate</mat-icon>
  <mat-icon>hearing</mat-icon>
  <mat-icon>audiotrack</mat-icon>
  <mat-icon>mail</mat-icon>
  <mat-icon>adjust</mat-icon>
  <mat-icon>dock</mat-icon>
  <mat-icon>camera</mat-icon>
</mat-card>
```

## Next Steps
* Fix the tests - run by ng test
* Place the toolbar in its own component
* Add components for each of the menu items and link them with the router
* Remove the app.component.html simplified content to be replaced by the bullet item above

