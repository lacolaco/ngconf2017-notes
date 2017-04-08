# Day 1


## [Keynote - STEPHEN FLUIN and IGOR MINAR](https://www.youtube.com/watch?v=anzsE2TbCyk)

- Why we build Angular

Docs traffic
Apr 2017 1.3M vs 810K
- AngularJS is stable
- github.com/angular/code-of-conduct
  - conduct@angular.io

Ecosystem
- consistency
  - Names
    - AngularJS vs Angular
    - コミュニケーションを楽に
  - Meetups
    - 727

SOf survey 2017
webapp frameworks
44% AngularJS/Angular

GitHub 

Build on Us
How to build library: Library Specs
best practice for library

Material
tools that make component authoring easier
overlay
gestures
accessibility

CLI 1.0: best practices

Angular IDE Webclipse plugin
Lang Services in VS Code, WebStorm, Angular IDE

Ionic
Ionic NPM install 1 Million
UNTAPPED
v3 today -> Angular 4, Faster boot time, Desktop/Tablet support

Angular today
in Production  
17% public Angular Domains = v4
Google 200 apps built on Angular v4

NBA.com @bmarti44
Angular in Production
D3
Why?: TypeScript, Favors standards, Drupal and Angular share programming principles
One Framework, Integrates with Drupal Blocks, Ecosystem(dragula, redux, d3), Performance, Data Integration

v4 
Better for Users
evolve, smooth 2 to 4
smaller apps, faster bootstrap
2->4, recompile -> faster
better for developers
- New APIs: ngif, ngFor Reactive paradime
- Faster Builds: packaging
- Better tooling: stable CLI version: Good UX
No Braking Changes for Stable APIs Common Usage Petterns

- Stage of the Art
experimentals
- Angular Universal: platform-server
- SW, PWA
Reliable, Fast, Engaging
- CLI: serviceWorker: true

Next
evolve Angular incrementally and predicably
- SemVer
4.0.1, 4.1.0 (Automated updates), 5.0.0 (New Features, Simple Updates)
- Time-based releases
Expect when changes coming
Week: Patch
Month: Minor
6 Months: Major

Using Angular @ Google
All Google Apps use the latest pre-release version Angular (G3)
Tested

Benefits of using the latest
Validated at Google
Feats. Fixes.
Compatible with tools and libs
but what if you can't?
LTS v4 Critical Bugfixes, Security Patches Octover 2018

v5 Themes
Simplicity (Client, Server, Buidling, ) Compiler JIT/AOT sometime diff, single compiler, same process
Speed and Size (tree-shaking improvmenet)
Smooth Updates

Summary
Who we are
Where we are today
Our plans for the future

## [I AM ONE WITH ANGULAR, ANGULAR IS ONE WITH ME - JOHN PAPA](https://www.youtube.com/watch?v=h7eVZg3j_Lk) 
  - slide: weekend

  Right tools

Developing toools
CLI, VS Code, Angular Snippets, Language Service, Azure Functions

CLI: easy, solid practices

ng new 
--dry-run
--skip-install
--routing
--prefix ma
--style scss

demo

ng serve
-o: open browser

ng g c nav
update appmodule: we forget to declare
ng g c rebels
ng g cl rebel: Class
ng g s data: Service
-d: --dry-run
-m app.module: Module to provide

red lines: wrong <- Lang Services

ng s -o: serve

Lazy loading: AngularJS = Difficult, Angular = Easy
Angular CLI splits code bundle
loadChildren: app/planets/planets.module#PlanetsModule
snippets: a-path, a-eager, a-lazy

webpack!!
ng eject

ROI
CLI is great

johnpapa/one-with-angular

PluralSight Angular CLI today

## [Mad science with the Angular Compiler - MINKO GECHEV](https://www.youtube.com/watch?v=tBV4IQwPssU)
  - https://speakerdeck.com/mgechev/mad-science-with-the-angular-compiler

  generate code from component to...
efficient vies, efficient providers instantiation

- Transformation

How works?
Input -> Output
Frontend (Analysis) / Backend (generation)
Lexical Analysis / Syntax Analysis (AST)
Static Analysis: without executing
tslint

analysis styles and templates

Breaking changes
<template> -> <ng-template>
Renderer -> Renderer2
sed? maybe break string literal

Context Aware Replacements
mgechev/ngmigrate
npm i -g ngmigrate

Code visualization
Large Software Systems

mgechev/ngast
get all metadata, relations

mgechev/ngrev
reverse engineering for Angular project
select tsconfig
visualize dependencies/relations

one dimension obove
mgechev/ngworld
visualization
ngworld -p tsconfig.json && open world/index.html

## [Creating VR Experiences with Angular and WebGL - AUSTIN MCDANIEL](https://www.youtube.com/watch?v=L_eQKnl8sao)

## [Module vs Module - DEBORAH KURATA](https://www.youtube.com/watch?v=ntJ-P-Cvo7o)

## [Embrace Component Tranquility - JUSTIN SCHWARTZENBERGER](https://www.youtube.com/watch?v=d7fLYenKy-I)

## [Animations in Angular 4.0.0 - MATIAS NIEMELA](https://www.youtube.com/watch?v=Oh9wj-1p2BM)

Angular 4.1
- `animation()` input variables
- `query()`/`queryAll()`
- programmatic animations
AnimationBuilder
 frame-by-frame control
.build(animations)
player.play(),pause(),finish(),onDone(),setPosition
- route animations
Animations + Routes
RouteOutlet has the data
Transitions = route changes
div [@routerAnimations]="fun(r)" > router-outelt #r="outlet"
yom.nu/ng-conf-2017

## [Keeping the Sand Out of Your Eyes  No Sandbox, No Problem - TIM EHAT](https://www.youtube.com/watch?v=Lkda4xNPi5M)
AngularJS 1.6
- Injection
Executing User Content is Bad
Potential is Bad
no valuable contents,internal tools -> Browser + LastPass...

Angular Expression
{{ 1 + 1 }} -> 2
{{ user.name }} -> 'timehat'
{{ user.name }} -> '<script>alert("XSS")</script> with escaping

Expression Sandbox
Resticting expression
difficult to test and maintain

1.6 Removal Sandbox
Edge case fixing for sandbox
No more patch

1. passing user content to $compoile => Even if it's excaped
2. Building templates on Server -> HTML escaped? ng-app remains
angular-expression-injection

Dont mix client/server templates
Dont generate template from user input
Use ng-non-bindable
Don't pass user contents to $func
Hack your app

## [Thoughtful Component Design - JEREMY ELBOURN and MILES MALERBA](https://www.youtube.com/watch?v=0BikjL858OQ)

## [Back from the past: A tale of helping others upgrade from Angular 1.x - SERGIO CRUZ](https://www.youtube.com/watch?v=FFhJSkI35U8)

## [Mischief Maker - LUKAS RUEBBELKE and ROGER TIPPING](https://www.youtube.com/watch?v=kW37RU5k8xM)

## [ng-STEAM - JOE SKEEN and GWEN SKEEN](https://www.youtube.com/watch?v=39vCAvW0a7E)

## [The Memory Leak Brain Drain - JON BOYD](https://www.youtube.com/watch?v=cWHR-Eqe8q4)

## [There and Back Again  a developer’s tale - JACOB TURNER](https://www.youtube.com/watch?v=IFblumxIFW8)

## [The Little Tool That Dreams Big - HANS LARSEN](https://www.youtube.com/watch?v=f9hhzDZXWPM)

## [The Angular Compiler 4.0 - TOBIAS BOSCH](https://www.youtube.com/watch?v=RXYjPYkFwy4)

smaller generated code

- Angular Compiler
Metadata -> Parse -> AST -> Transform -> TS/JS -> Instatiate -> App
4.0 Change is Transform & Instantiate

View() {
  return viewDef([
    elementDef(0, "div", [["a1": "v1"]])
  ])
}
ViewDefinition = 1 / component definition
ViewData = 1 / component instance

Hierarchy: child count
elementDef(1, "div", [])
elementDef(0, "span", [])

Directive
directiveDef(3, NgModel, [NgForm]), child count, class, injection

Lifecycle hooks
class NgModel implement ...
Bit shift

Bindings

elementDef(, , , ["href"])
(view, comp, check) => { check(view, 0, comp.someHref) }

v2 vs v4

v2
Performance is good. but big.

Trade-off
Benchmarks
bootstrap/size/route/update

size: better
Closure Compiler: super optimizable 

bootstrap: not changed

route: OK (not tuned component)
update: (not tuned component)

Next
- Make AOT the default
- Watch mode: ngc --watch
- Better error messages
- Type-checking in templates (without ngfactory, indicate on the template)
- More flexible metadata (3rd party tooling)
- Remove ngfactory.ts files (more simpler)

## [Reactive Programming with RxJS  A Beginner’s Perspective - TRACY LEE and BEN LESH](https://www.youtube.com/watch?v=aZRJOVPMW4k)

Perspective

How to create new Observable
new Observable(observer => ...)

Many creation methods
of, from

Lookahead Search
(input)=inputChange$.next(value)
inputChanges$

Mistakes
import from "rxjs/Rx" "rxjs" 
Include just what you need
Tree-Shaking

catch(err => {
  console.error(err)
  return Obsevable.empty()
})

switchMap(text => {
  return this.puns.suggestKeywords(text);
})

keyword$.share() for twice  | async

Same-shapedness

Wrap Speech API

keyword$ = merge(spoken, typed).share()


## [How to Scratch an Itch - JUSTIN SEARLS](https://www.youtube.com/watch?v=7YB1I5h2ujw)

- Make apps for your fun
