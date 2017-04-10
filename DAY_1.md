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

VR with Angular

`#ngPanda`
@amcdnl


interaction
- punch card
- keyboard
- mouse
- touch

VR is the next evolution

WebVR (WebGL)
2014-

Same Problems, different story
- Interaction event: click, keyboard, touch
- Viewport: window resize
- Life cycle: init, render, destroy
- Animations
- Dataflow

Challenges
- Desktop//Mobile VR
- Head tracking
- Gesture
- Voice Recognition for Input
- Shaders

HOPE
- a-frame
  - WebGL markup

in Angular

Custom  Renderers!
- Web
- Mobile Native
- Desktop Native
- Server-side

abstracted DOM elements

Override DOM Renderer

```
createElement(obj) {
  // if object === webgl don't render
}
```

```
<ngx-renderer>
  <ngx-orbit-controls>
  <ngx-scene>
    <ngx-sphere *ngFor>
```

Apply the stereoscopic filters

WebVR Polyfills


VR emulator Chrome extension

Next
- Better Render Ref.
- Native Compilation?
  - into Headset native

## [Module vs Module - DEBORAH KURATA](https://www.youtube.com/watch?v=ntJ-P-Cvo7o)

ES2015 Module vs Angular Module

Lazy loading

JS problem: Namespaces, Code organization
- AngularJS Module
- TypeScript Module
- ES2015 Module
- Angular Module

ES2015 Modules
- simple code file
  - export 
  - import
- micro

Angular Module
- macro
- defines components, dependencies
- more modules: feature modules
  - AppModule
- Angular Module is a ES2015 Module

Components depenedency

all component,pipe in AppModule

- declarations: [...]
- bootstrap: [AppComponent]
  - find in index.html
- providers:[ProductService]
  - application wide injector
- imports: [BrowserModule, ...]

ES2015 import & Angular imports

RouterModule
- Directives (declarations, exports)
- Services (providers)
  - not provided by forChild()

exports
- declared stuff for other modules

Feature modules
- particular feature area
- still provides to application wide injector
- CommonModule: ngIf, ngFor
  - BrowserModule has 

add new features modules...
Duplicated components and imports
-> SharedModule

SharedModule
- StarComponent
- CommonModule ->
- FormsModule

Angular Modules
- Organize the pieces of out app: declarations
- Extends out app with capability from external lib: imports array
- Provide a template resolution environment: ngFor, ngIf, ...
- Aggregate and re-export
- Provide config for compiler
- Loaded eagerly or lazy

Lazy but fast
- first time for bootstrap
- small bundle

Preparing for Lazy Loading
- Use a feature module
  - lazy load is based on module level
- Group routes under a single parent
  - { path: products, children: [...] }
- Don't import the module in another module
  - eliminate all ES2015 importing

## [Embrace Component Tranquility - JUSTIN SCHWARTZENBERGER](https://www.youtube.com/watch?v=d7fLYenKy-I)

Componentization

Angular Component model

Angular Component = Markup + Logic + Style

Component: Web Components, Polymer, React

Component architects

Player cards

Component = styles, Input/Output, Template

Componenize all the things -> cannot

Darkness fall

price we pay when we build component : Component Tax

An Angular Component
- Rendering Engine
   - Deps, CD
- Execution and Tracking
- Pre-run Compilation
- JS payload adding

The Payload Tax
- bootsrrapping
- Lazy loading
- display decitions
- change detection

The Execution Tax

deciding to make a component
- We need that payload
- We want that execution

becoming component architect

custom element selector pattern 
- write many container components

The Container Element Tax
- Custom Element is not block level by default
  - :host: { display: block; }
- not semantic `<section>` wrapper
- -> JS Payload

Component Selectors
- element
- class
- attr
- attr name and value
- :not() selector

```
<section owHeroList>
```

```
@Component({
  selector: [owHeroList],
  template: `
    <h2>Heroes</h2>
    <ng-content></ng-content>
  `
})
```

**Component footprint gets smaller**
  - no styles
  - no container

Component/**Directive** Selectors

Component Composition
- The Decision and Presentation Pattern

Decision Maker + Presenters
- Decision Maker
  - Parent Component: Load Data, Change Data
- Presenters
  - Child Component: @Input/@Output, OnPush
  - easy to reuse

The Tree Coupling Tax

CardListComponent: Decision
```
@Component({
  selector: ow-card-list,
  template: <ow-card *ngFor=".." [card]="card" (upvote)="...">
})
class {
  cards: [...];
  upvote() {};
}
```

CardComponent: Presenter
```
@Component({
selector: 'ow-card'
template: `
<h2>{{card.name}}
<button (click)="upvote.emit()" <---
`
})
```

new UpvoteButton

```
@Component({
selector: 'ow-upvote'
template: `
<button (click)="upvote.emit()" <---
`
})
```

middle (upvote) is only for pass-thru. we don't have pay that tree coupling task

Trade-off

a option: CardService in UpvoteComponent (injection)

Challenge with Services: each component has own services
- not be coupled
- harmony

it's like Redux patterns
- Store in all component

Eliminate Tree-coupling tax
- Decision/Presentation
- Services
- Oservables
- Redux

**Atomic Design** methodology
- Page View
  - Composition Component
    - native DOM + attribute selector
      - aside[owAgentList], article[owMap] 
  - Global Component
- Service with Observables
- Decision and Presentation

Componentize tax balance

## [Animations in Angular 4.0.0 - MATIAS NIEMELA](https://www.youtube.com/watch?v=Oh9wj-1p2BM)

http://yom.nu/ng-conf-2017

Demo: yom.nu/ng-conf-2017-demo

4 years works on Angular

- New feeatues
- Everything is here 4.1
- Demo

@angular/animations
- animations specific code
- refactored fully dynamic

Migration from 2
- import style,animate,transition, trigger from /animations
- import BrowserAnimationsModule

a ton of changes not external API but internal
- 100% run time handled which allows for a lots of cool things

AnimationsModule
- BrowserAnimationModule: for users (runtime)
- NoopAnimationsModule: for testing (disable all animations)

SYstemJS
load all three bundles
- animations.umd
- animations-browser.umd
- platform-browser-animations.umd

basic example
- fade in/out

special property `@` symbol

```html
<div [@fade]="active ? 'in' : 'out'">
  hello there
</div>
<button (click)="toggleActive()">Toggle</button>
```

```
animations: [
  trigger('fade', [...])
]
```

import an animation as a module

```
animations: [fadeAnimations]
```

```
export fadeAnimations = trigger('fade', [
  transition('* => in', [
    style({opaticy: 0}),
    animate(100, style({opacity: 1}))
  ]),
  transition('* => out', [
    animate(100, style({opacity: 0}))  
  ])
])
```

Angular knows opacity is 1 before the animation started

Animation Callback Events

```html
<div [@fade]="active ? 'in' : 'out'"
     (@fade.start)="onStart($event)"
     (@fade.done)="onDone($event)">
  hello there
</div>
```

$event
- element: any (div)
- fromState: string (in|out)
- toState: string (in|out)
- totalTime: number (1000)
- triggerName: string (fade)
- phaseName: string (start|done)

building animation()s
- Reusable animation

`animation()` function
- defines a reusable animation as a module
- input variables
- transition() uses it
- sub animations
  - `animateChild()` is used to invoke it

Refactor `@fade` animation
- fade in/out is are common

```ts
export const fadeIn = animation([
  style({opacity: 0}),
  animate(1000, style({ppacity: 1}))
])
export const fadeOut = animation([
  animate(1000, style({opacity: 0}))
])
```

Use 

```ts
trigger('fade', [
  transition('* => in', animateChild(fadeIn)),
  transition('* => out', animateChild(fadeOut))
])
```

Dynamic animation: input variables coming
- animateChild accepts input params
- animateChild(animation, {params: value})

```ts
export const fadeIn = animation([
  style({opacity: '$start'}),
  animate(1000, style({opacity: '$end'}))
], { end: 1}) // default value

export const fadeOut = animation([
  animate('$duration', style({opacity: 0}))
], { duration: 1000 })
```


```ts
trigger('fade', [
  transition('* => in', animateChild(fadeIn, { start: 0})),
  transition('* => out', animateChild(fadeOut, { duration: '$customTime'}))
], { customTime: '2s' }) // valiables for variables
```

how do you get data into a transision

```ts
<div [@fade]="exp"></div>

@class DemoFadeComponent {
  exp = 'in'
}
```

from 4.1: object passing for passing params

```ts
<div [@fade]="exp"></div>

@class DemoFadeComponent {
  exp = { value: 'in', customTime: 1000};
}
```

`query()` animations

query() and queryAll()
- Collects inner items
- Uses querySelector/querySelectorAll
- Can detect enter/leave & active animations

```html
<div class="contianer" *ngIf="active" @reveal> // no expression
  <h2>title</h2>
  <p>text</p>
  <p>text</p>
  <img/>
</div>
```

Group: parallel

```ts
// 1. shrink the container to be small
style({overflow: 'hidden', height: 0}) // @ container
// 2. hide all inner children
queryAll('*', style({opacity: 0}) // @ children
// 3. animate the container and inner children
group([
  animate('0.5s', style({ height: '*'}), // container
  queryAll('*', animate(500, style({opacity: 1}))) // children
])
```

Programmatic animations

`AnimationBuilder`
- Build animation on the fly: out of `@Component`
- Player access: lower APIs exposed
- frame-by-frame control

```ts
class Cmp {
  constructor(private builder: AnimationBuilder) {}

  start(percentage) {
    const definition = this.builder.build([
      style({width: 0}),
      animate(1000, style({width: (percentage * 100) + '%'}))
    ]);
    const player = definition.create(element);
    return player
  }
}
```

- player.play(),pause(),finish(),onDone(),setPosition(percentage),destroy()

FAQ feature: route animations

Animations + Routes
- 2 child routes and 1 parent route to control them
- have to access to route-outlet
  - RouteOutlet has the data: active route, and custom metadata within the route
- Transitions = route changes
- No extensions for router edge case: Use basic APIs

```html
<div [@routerAnimations]="prepareRoute(r)">
  <router-outlet #r="outlet"></router-outlet> 
</div>
```

```ts
prepareRoute(r: RouterOutlet) {
  return r.activeRoute ? r.activeRoute.config.animation: '';
}
```

```ts
const ROUTES = [
  {
    path: '',
    component: IndexPage,
    animation: {
      value: 'home',
      // more data
      left: '100%'
    }
  },
  {
    path: 'about',
    component: AboutPage,
    animation: {
      value: 'about',
    }
  },
]
```

```ts
trigger('routerAnimations', [
  transition('home => about', group([ // home => about specific animation
    query('home-page', [...]),
    query('about-page', [...]),
  ])),
  transition('* => *', [ // all routing
    query(':enter', [...]),
    query(':leave', [...]),
  ]),
])
```

Remember: Angular 4.1

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

https://goo.gl/TvRLlu

Angular Material
- Projected by Angular Team
- High quality set of UI component
- Based on Material Design Spec
- Use best practice


1 to 2
- 2.5 years
- 50+ components
- 5657 commits

We've learned a lot to building component
- component design practice

Thoughtful use of custom elements for your angular components (and when not to use custom elements)

Angular custom elements for wraps stuffs and put it anywhere
- `md-input-container` style
- users still can access to the native elements
- avoid hiding element inside of the template in a custom element

```html
<md-input-container>
  <input required type="email">
</md-input-container>

<button md-button>SAVE</button>
```

Same practice for complex components
- Keep composition of native elements 

```html
<nav md-tab-nav-bar ...>
  <a md-tab-link ...>
    {{ link.label }}
  </a>
</nav>
```

Other benefits
- In Material Design, Buttons handles click actions and navigation links 
- accessibility for screen reader users
  - need to add right roles and aria attrs

Not Good 
```html
<md-button (click)="...">SAVE</md-button>
<md-button [href]="...">VIEW</md-button>
```

Good: native accessibilty without additional attrs
```html
<button md-button (click)="...">SAVE</button>
<a md-button [href]="...">VIEW</a>
```

Other benefits
- make components simple

Not Good
```html
<md-input></md-input>
```

- need to pass-thru inputs from `md-input` to inner `input`
  - larger generated code by compiler

Good
```html
<md-input-container>
  <input required type="email">
</md-input-container>
```

Benefits
- Familiar APIs!
- Accessibiity win!
- Simpler implementaion!

Thoughtful COmponent Composition

Menu view
- 2 parts
  - toggle button
  - menu panel
- how to write the template

Not Good
- Encapusulated by md-menu
  - how to pass the class to inner trigger button?
  - another class for panel to put on custom shadow?
  - and and and ...
```
<md-menu [triggerClass]="menuSpacing" [panelClass]="panelShadow" ...>
  <md-menu-item ...>{{opt.label}}</md-menu-item>
</md-menu>
```

now: Split up the different parts and connect
- Flexible
- `mdMenuTriggerFor` directive

```html
<button md-button [mdMenuTriggerFor]="menu" ...>SETTINGS</button>

<md-menu #menu="mdMenu">
  <button md-menu-item ...>{{opt.label}}</button>
</md-menu>
```

Mor ecomplex component approach
- autocomplete = input + options panel
- datepicker = input + calendar panel
- data-table = table + sorters + paginator

benefits
- single responsibility
- flexibility win
- friendly to native elements
  - interop other libs

directy touchs to DOM

Thoughtful DOM Interaction

Use code -> Angular -> DOM: abstraction is why we use a framework

how to use native web APIs not abstracted

Measuring, sizing and positioning of elements

Slider component: requires window width

Reaching outside the Angular app
- html dir="rtl"
- body > Angular

Server Side: Universal
- no DOM APIs on Seriver

Found: when happen Component doing on native API = 2 kinds
- In response to user interaction
  - Good to pre-render!
  - No users on server
- On initial render
  - Needs special handling
  - measuring something after CSS: common case
    - Universal will provide way to do that some small snippets to fix-up that

WARNING: Avoid manual templating!! 

DOM
- avoid when possible
- use carefully if necesary
- beware XSS

The Angular Zone

Thoughtful Zone Interaction

Asynchronous execution context
- even asynchronous things!
- detect when Angular runs CD

ngZone.runOutsideAngular(() => {
  // invisible from Angular

  document.body.addEventListener('scroll', () => {
  })

  requestAnimationFrame(() => {
  })
})

Be thoughtful about
- custom elements
- component composition
- DOM interaction
- Use of Zones


## [Back from the past: A tale of helping others upgrade from Angular 1.x - SERGIO CRUZ](https://www.youtube.com/watch?v=FFhJSkI35U8)

My history of upgrading AngularJS to Angular

2013
- first AngularJS
  - download AngularJS source code
  - add script tag to a page
  - write
  - profit?

AngularJS Awesome in 2013
- Idea to conception in no time
  - protopyping
- Great separation of concerns
- Similar MVC as backend code
  - dependency injection

in 2017
- write client-side app

2017
- install the CLI
- generate project
- hello typeScript
- npm all the thing
- no script tag
  - automated by CLI
- help(?)

This happens All the time with new Angular developers

Problem: modern JS apps
- More tooling: Node.js Webpack, ..
- Modern languages: ES2015m TypeScript, ...
- Mo limited to browsers
- All of this while
  - Backwards compatible
  - learning best practieve as we go

- Not as simple as script tags anymore
- Dev onboarding is more difficult
- Lot' to gain, but comes at a price

JavaScript has gotten harder

Common difficulties when upgrading

TypeScript?
  - don't have to, but most people use

Template syntax?
  - `[]`, `()`, `*`

CLI?
  
Actual challenges I ran into
- Mixed with backend: Rails + AngularJS
- CoffeeScript
- Bower
- Grunt

We wanted to undertand 
- so we used science

Upgrading process

Pain points: survey by jeffwhelpley
- Time & priority: stopping developing new features
- Business incentive
- Team proficiency
  - developers didn't want to learn new framework
- 3rd party libs
- All the tooling

The new Angular syntax is not the reason why some people aren't upgrading

How to go about it Angular

Steps we can take today
- Component-based
  - move from controllers and directives
- Write full SPAs
  - stop container of the website
- install deps with npm
  - install
  - webpack
- Use TypeScript

## [Mischief Maker - LUKAS RUEBBELKE and ROGER TIPPING](https://www.youtube.com/watch?v=kW37RU5k8xM)

- application developing stage
- enlighten
  - have a MIDI Keyboard, use navigator.requestMIDIAccess()
- knowledge
  - learn RxJS and Web MIDI API
- understand
  - raw data to view make senses
- manifest 
  - "make music together"
- perceive: notice
  - perceive the impact of out actions
  - we must ask the universe when we do something what is the impact, what are you trying to tell us
  - you may want to record
- reflect
  - play the recorded audio
- evolve
  - multiple recording
- review
  - singing

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
