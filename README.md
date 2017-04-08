# ngconf2017-notes

# Day 1

## Notes

### Chat with Victor S.

- Router is on the way of Semver. No breaking without deprecation on 5, 6 and future.

## Keynote 1

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

## John Papa
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

## Minko Gechev: Compiler
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

## Animations
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

## No Sandbox No Problem @tim_ehat
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

## Compiler 4.0

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

## RxJS

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


# Day 2

## Questions
- [ ] Best Practice: File Upload in Forms > Kara
- [ ] Best Practice: Async Select List and prop-binding (list > selected race condition)
- [x] Mobile-Toolkit road map > Maxim, Jeff
- [x] @angular/fetch draft review > alxhub, Rob
- [ ] v5 compiler details > Tobias
- [x] CLI for Library
    

## Performance Birds of a Feather

### LT: Capital One

- 60 fps app
- measuring
- webpack
- capital one's tool for measuring performance
- preloading (mobile/desktop strategy)

### LT: Weather Underground
- Universal
- Productivity
  - One template front/back
  - Stay context
- Performance
  - available before angular bootstrapping
  - Static assets cache
  - long max-age

- xxhash: eTag Hash

### LT: Angular at ADP 
Torgeir
- internal npm pkgs
  - 2.4.x
  - single repo: @espresso/*
  - AoT(prod), JiT (dev)
- bundling
  - rollup: single optimized bundle
  - webpack: lazy loading needs
  - i18n: 1 app bundle per lang
  - source-map-explorer
    - Note: decorators(templates) not shaken out by default
    - 4.2?
  - SharedModule is trade-off: optimize / DX
- NgUpgrade
  - Important to optimize bundles
  - Angular + AngularJS
  - No lazy loading in AngularJS
  - combine ui-router + Angular touer
    - lazy load of new code

### LT: Ionic 
Josh

- for Mobile
- angular is fast, no animations optimization
- avoiding requestAnimationFrame animations
- runOutsideAngular

- Testing, Tooling
  - 3G condition, Moto G
  - webpack-bundle-analyzer
- momentjs -> date-fns
  - Sean: we can eliminate locale files of momentjs
  - not easy

### Roundtable discussion

Rob
- use AoT by default
  - developing, testing
  - fast
  - watching, dynamic component loading, monky patching
    - entryComponents
  - Registry
  - only recompiling needed
  - Angular bazel closure compiler? (ABC project)
    - ask to Igor
  - CLI integration

- WebWorker supports
  - UI/Worker messaging
  - compilcated to 99% user
  - dropping webworker and switch to universal
  - too complex

- Service Worker Tooling
  - special web worker
  - @angular/service-worker experimental ,CLI
  
## Talk with Miles 

- ng-japan
  - talk about material2 and flex-layout
  - ask to show the roadmap
  - "do you know @angular/flex-layout?"
- attribute style consistency
  - cannot tell errors as build time
  - camelCase is easy to find angular things
- releasing
  - blocked by new packaging style: FESM

## AMA

Hans, Matias, Chuck
- "yarn is better than shrinkwrap, and faster"
- CLI is a garden. ng eject for plugins

Mike Brocchi, Raul, Justin
- About CLI, is there any update on the feature for library creating, building and packaging?
  - After today
  - roadmaped. definitely supports.
  - projectType: app, lib

## DiY Angular Compiler (Workshop)
https://docs.google.com/presentation/d/1N2FrwCnsnMO9_4w3QtnTMdaBtXXQdvAceXbk9_pEY9E/preview?slide=id.p

- source-map-explorer
- ng build --prod --sourcemaps
- Remove Forms, Http

AngularJS CD
- $digest()
- Each Watcher is a function call
- Each Scope has watcher

React CD
- state changes
- re-rendering as virtual DOM
- diffing virtual DOM
- Update real DOM

Angular Performance Game Plan
- Auto generated super-optimized code 
- A.K.A The Compiler

HTML code -> Optimized TS code

HTML Parser Advantage: why Angular team introduce own HTML Parser
- Line numbers: error message
- Tooling: codelyzer
- Predictability & case-sensitivity: Avoid browsers gap
- Server-side render
- Language Service

The compiler
too complex

Exploring the compiler
- "compile": "ngc"
- npm run compile

Looking Inside
- Components
- Styles
- Modules: Dependency Injection

- HTML -> ngfacory

first part: once (static)
second part: on change (dynamic)

```ts
return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '\n  ',
      '\n'
    ]
    )),
    (l()(),import1.ɵted((null as any),['Hello\n']))
  ]
  ,(null as any),(ck,v) => {
    var co:import2.AppComponent = v.component;
    const currVal_0:any = co.title;
    ck(v,1,0,currVal_0);
  });
```

```ts
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '\n  My title is: ',
      ' !\n'
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(null as any),(ck,v) => {
    var co:import2.AppComponent = v.component;
    const currVal_0:any = co.title;
    ck(v,1,0,currVal_0);
  });
```

CSS

css.shim.ngstyle.ts
```ts
export const styles:any[] = ['h1[_ngcontent-%COMP%] {\n    color: hotpink;\n}'];
```

`%COMP%`

- Closure Compiler can remove unnecessary injection code

```
{{title * 2}}
```

compile -> error happens

Time to Serve
- ngc
- ng serve

Replace to bootstrapModuleFactory
- edit ngfactory

Title to upperCase

```ts
return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      'I love WEB! \n  ',
      '\n'
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n', ''])) // 2 text -> 1 interpolation
  ]
  ,(null as any),(ck,v) => {
    var co:import2.AppComponent = v.component;
    const currVal_0:any = co.title.toUpperCase();
    const currVal_1:any = co.title;
    ck(v,1,0,currVal_0);
    ck(v,2,0,currVal_1); // 2 = nodeIndex
  });
```

multiple interpolation

```ts
return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h1',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      'Upper case title is: ',
      'Sub title is',
      'End',
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n', '']))
  ]
  ,(null as any),(ck,v) => {
    var co:import2.AppComponent = v.component;
    const currVal_0:any = co.title;
    ck(v,1,0,currVal_0.toUpperCase(), co.subtitle);
    ck(v,2,0,currVal_0);
  });
```

Dependency Injection
`getInternal()`

OnInit

```ts
function View_AppComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'app-root',([] as any[]),(null as any),(null as any),(null as any),View_AppComponent_0,RenderType_AppComponent)),
    import1.ɵdid((24576 | 32768),(null as any),0,import2.AppComponent,[EmojiService],(null as any),(null as any))
  ]
  ,(check, v) => { 
    const co = v.component as import2.AppComponent;
    check(v, 1, 0, co.title);
   },(null as any));
}
```

## PWA by Maxim
Automatic Progress Web Apps using Angular Mobile Toolkit

- Milestones of the Web
Static -> Dynamic -> AJAX -> Responsible -> PWA

- PWA
= methodology
evolving hybrid regular web pages and mobile application

Connectivity-independent -> SW
App-like -> App Shell architecture
Re-engage -> Push / Notifications

Mobile Toolkit
mobile.angular.io
90% documentations are outdated

where is --mobile
-> no more

2 packages
- @angular/service-worker
- @angular/app-shell

Anguar Service Worker: NGSW
/bundles: js
/build: plugins
/companion: Lib
/worker, /plugins: source code

npm install -S @angular/servie-worker
ng set apps.0.sercieWorker=true
ng build --prod
- sw-register.bundle.js
- worker-basic.min.js
- ngws-maifest.json
Offline capable

Static content caching
ngsw-manifest.json: static > urls > ... with hash

Route redirection
ngsw-manifest.json: routing > index,routes

Extending manifest
same name ngsw-manifest.json: merged!
autogenerated + routing

External content caching
"external" > "urls": []

Dynamic content caching: coming soon
"dynamic" > "groups" > "name", "urls", "cache"
urls: {
  "/api/news": {
    "match": "prefix"
  }
}
cache: {
  "optimizeFor": "freshness" or "preformance",
  "maxAgeMs": 1000,
  "maxEntries": 2,
  "networkTimeoutMs", "strategy": "fifo"or"lru", "lfu"
}

Compinion
`imports: [ServiceWorkerModule]`

```ts
constructor(private ngsw: NgServiceWorker) {
  sw.updates.subscribe(event => {
    if (event.type === 'pending') {
      if (agreeToUpdate) {
        sw.activate...
      }
    }
  })
}
```

Push notifications
Subscription: App -> Push Service -> App -> Backend
Notification: Backend -> Push Service -> NGSW -> Notification

```
{
  "push": {
    "showNotifications": true,
    "backgroundOnly": false
  }
}
```

```ts
constructor(private ngsw: NgServiceWorker) {
  sw.push.subscribe(notificationPayload => {
    // process 
  })

  sw.registerForPush().subscribe(subscriptionObj => {
    // send subscription to backend
  });
}
```

Basic SW
`boostrapServiceWorker()`

Automatic PWA
```
{
  "static", "routing", "external", "dynamic", "push"
}
```

## Build Measure Machine Lean with Angular
Rangle.io

Build/Measure/Learn cycle

Redux Beacon
- Map Redux or ngrx actions and state to analytics
- Centralize analytics logic
- Send analytics events to multiple target

Feature Toggles
- Like *ngIf but controlled by config
- manage switch state in config 

AB testing
- Headlines
- Paragraph Text
- Call to Action Text
- Colors
- Images
- Entire flows

Personalization: GA

Machine Learning
Beacon to custom target -> Database

## Internationalization 
Oliver

What can Angular do for you?

Angular i18n Overview

4.1.0-beta.0

1. Prepare your code

```html
<p i18n="meaning|description@@id">Some Text</p>
<!--i18n: meaning|description@@id -->
  I don't output any element either
<!--/i18n-->
<img i18n-alt="meaning|description@@id">
```

Prepare: ICU
```
{elements.length, plural,
=0 {no selection}
=1 {one element}
other {{{element.length}} elements}
}
```

2. Extract
Without the cli
ng-xi18n --i18nFormat xlf --outFile src/i18n/source.xlf --locale en
With the CLI
ng xi18n --i18nFormat xlf --outFile source.xlf --outputPath src/i18n --locale en

3. Translate
copy source.xlf -> messages.ja.xlf

4. Merge translation
JIT
- TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, CompilerConfig({missingTranslation})

CLI
ngc --aot --i18nFormat xlf --i18nFile src/i18n/messages.ja.xlf --locale js
ng serve --aot --i18nFormat xlf --i18nFile src/i18n/messages.ja.xlf --locale js

https://github.com/ocombe/i18n-demo

xliffmerge: ngx-i18nsupport

Accept-language

NExt
- Bug fix
- missing strategy for AoT

Features
- line/column
- XLIFF 2.0
- i18n in code
- add # and offset in prural
- in attributes
- auto detect format
- open serializer API

Translation Spreadsheet
- Google translate

https://docs.google.com/presentation/d/1l7kr_OdSxiobAVkTrMG-LGxqsJcj9Fd1zJTNpVXSu7A/edit

# Day 3

## Keynote
Brad, Rob

Angular at Google
Where uses, Why open source

Google runs on Angular
Enterprise 2 handreds
Goal by end 2017
Automatic Closure to TypeScript (deprecated typed js)
Material 1 + Material 2 (merge)
Google Angular Course (movie) 59 instructors, 3000 attendees, 90 offices

Public Face upgrading
Clound Platform
GA
Firebase
Express

Google Open Source

Why?

Google has open source
MapReduce, BigTable, Borg, Spanner, ...
-> Hadoop, HBase, CockroachDB, ... (Open source)

Open source
- Credit
- Tools (ecosystem): IDE extensions
- Training: lecture
- Hiring: not proprietary
- Quality: outside of google usecase

Feb 2017
TS, CLI is not working in Google

Google
C/C++ Java, JS* Python, Go
JS* = closured JS

AtScript to TypeScript
TypeScript: inlined types

Language approval process
Apply -> Fultill checklist -> Commitee -> Approved: 2 years
TypeScript is approved in Google!!

TypeScript benefits
- Inline types
- Fast recompile
- Decorators
- Closure compatible
- IDE Support
- Automatic BUILD files
- Automated coversion
- Vibrant community

April 2017, not CLI works

tools in google
Bazle, Closure

Bazel
- Speed
- Scalability
- Flex
- Correct
- Reliable
- Repeatable
bazel.build

ABC: Angular with Bazel and Closure (with TS)

ABC Exploration
Angular Core -> Angular Material -> Early Adopters

Open Source and Google moving closer

The Angular Platform
- raised level surface: many features
- declared policy

how we do measure app loved

mobile UX: doubleclick analysics
avg. mobile 19sec. on 3G

5sec or less

People says don't use framework
interactive app: needs to reliable and fast on mobile
static and dynamic contents mixiing
content-first sites dependent on ad revenue

Apps that developers love building

@angular/platform-server: previous Universal
Interactive and Faster with App Shell

```
imports: [BrowserModule.withServerTransition({})]
bootstrap: [MyComponent]
exports: [MyComponent]
class MyAppModule
```

```
imports: [ServerModule, MyAppModule]
bootstrap: [MyComponent]
```

- http

```
renderModuleFactory()MyServerAppModuleNgFactory, {document, url})
  .then(rendererdHTML => {
    writeFile('app-shell.html', rendererdHTML);
  });
```

Spinner

App Shell + Service Worker = LOVE
out of network

Angular Service Worker: automatic offline cache

Mixed Content Sites

angular.io
shell(static) and documentation(dynamic)

```
function render(req, res) {
  renderModuleFactory(..., { url: req.url }).then(res.sendResponse)
}
```

Service side routing

want to build express adapter by community

The New York TImes

AMP Pages
without JS
no interactive

AMP (first paint, engage) + PWA (push, )
- Instant first paint
- install SW in background
- click thru to app
- Instant interactivity (intercept request)

## Shai: Angular Router LIVE demo

authentication
verifying indentity

authorization
who allowd to view it

github.com/hirezio/the-princess-guards

## Victor S.  Upgrading Enterprise Angular Apps

Large Business AngularJS Apps

NgUpgrade
Vertical/Horizontal Slicing
Url Management (Single, Mixed)
Lazy Loading AngularJS

NgUpgrade

AngularJS injector in NgModules's injector tree

```
upgrade.bootstrap(document.body, "Angular1AppModule")
```

Vertical slicingg vs horizontal slicing
Strategy: Upgrade Shell
Replace Root (out of router) to ANgular
```
app-component
template: `<div class="ng-view"></div>`
```

Strategy: Vertical Slicing
Upgrade by screen (route)
Angular Screen, AngularJS screen
upsides
- easy to debug
- migration encapsulation
- fast app
downsides
- code dups: maintain 2 version of same component
- coarse-grained

Strategy: Horizontal
Upgrade by component (leaf)
Mixed screen
upsides
- easy to get stated
- no code dups
downsides
- harder to debug
- harder to coortinate multiple teams
- hinders refactoring and tooling
- hinders performance

Managing URL

Single ownership

Strategy: sibling outlets
```
app-comp
template: `
  <router-outlet>
  <ng-view>
`
```

CustomHandlingStrategy
`shouldProcessUrl`: url.toString().startsWith


Mixed Ownerships
Nested router switching
`extract`, `merge`

- URL is gllobal mutable resource
- Siblings Outlets

Upgrading Like a Pro
Strategy: Lazy loading AngularJS
main: Angular
chunk0: contains Angular 1 + NgUpgrade
`loadChildren: ./angular1module#Angular1Module`
upsides
- maximum efficiancy
- on demand download
- can preload AngularJS
- can bootstap AngularJS after preloading in the background
downsides
- nuanced

tomorrow

leanpub.com/ngupgrade

## Progrees: Building EmotiNG

Emoji as a Service

Building real-time apps is now easy
no refresh action
Dropbox, Slack

has been really hard

Angular + NativeScript + Firebase

why native
- camera
- app store

Build cross-platform app
Firebase + NativeScript plugin: Observables

AngularFire2

Angular + Firebase + Kendo UI (charts)

www.nativescript.org

## Chuck: Angular Template Language Service

New Angular Language Services

what is that Language Service thing
- Completions
- Errors
- Hints
- Navigation

How to i use it?
VS code: "Angular Language Service" (ng-template)

demo

separated files

WebStorm: 2017.1
install: npm i -D @angular/language-service

Others w/ TS supports

npm install typescript@next @angular/language-service
tsconfig: plugins: [ { "name": "@angular/language-service" }]

How does it work

Topology (Today)
Editor process <--RPC--> [Angular LS process, TypeScript LS process]

Future: TS2.3
Editor process <--RPC--> TypeScript LS process{Angular LS}

Completion Workflow
Template -> HTML AST by Parser -> Template AST (Element, Component, Directive) -> Find context that cursor in
what can be the child of a div?

Expressions {{ data.| }} -> HTML AST TEXT:{{ data. }} -> Expression AST (Interpolation, Read data)
(data property of $implicit) -> TS LS -> properties of data

Roll-your-own Editor Integration
`new TypeScriptServiceHost()`

Future 
- Unification with TS server 2.3
- Find all references
- Refactor/Rename
- Quick Fixed
- Improved diagnostics
- Support in more editors

## Kara: Form Validation

- overview
- demo (today)
- upcoming feature

Overview
FormControl, value, errors

FormControl -> [ValidatorFn] -> ValidationErrors|null
error message for UI

AsyncValidatorFn -> Observable<ValidationErrors|null>

demo

```
input.ng-invalid.ng-touched {
}
```

```
*ngIf="name.invalid && name.touched"
```

```
*ngIf="bid.hasError('required')"
```

Upcoming
under the design process

Sync Validator -> Errors
Sync Validator -> null -> Async(PENDING) -> Errors ->

Concurrently validation: Validation Pipeline w/ Observables
valueChanges.mapTo(ctrl).map(ctrl.validator).switchMap(err || ctrl.asyncValidator)
- Custom Validator Chains
- Control order and timing
- Emit Errors on demand
- 

```
myChain(ctrl: AbsCtrl): ValidatorChain {
  return (obs) => {
    return obs.map(Validators.required)
    .switchMap(errs => errs ? Obs.of(erros): this.validateFn(ctrl).startWith(PENDING))
  }
}
```

Real-time async validation w/ firebase

## Uri S.: Breaking the eyes
accessibility
- not just blind people
- keyboard, screen readers

ChromeVox

aria-label
role="button"

- Use tabindex, role, etc.
- Test your app as a visually challenged person

## Addicted to AngularJS?
Pete, Geooge

We love AngularJS
- 10x less code
- 10x more fun

Time to Upgrade?

ngUpgrade
Angular + AngularJS

Hybrid Todo App
https://github.com/angular-upgrade-examples/todo-app

UpgradeModule, 
UpgradeCommponent,
downgradeComponent,
downgradeInjectable,

Therapy

- Bootstrapping
- Downgrade components
- Downgrade services
- Upgrading component
- Upgrading services

Boostrapping
bootstrapModule() -> ngDoBootstrap -> bootstrap()

Downgrade Angular component to AngularJS directive
- entryComponents: [FooterComponent]
- .directive('todoAppFooter', downgradeComponent({component: FooterComponent}))
- [items]="$ctrl.items"
- (remove-completed): kebab-case

Downgrade and share Services
- providers: [Logger]
- .factory('logger', downgradeInjectable(Logger))

Upgrade components
- `@Directive`
- `ItemListFacade extends UpgradeComponent`

Upgrade services
`provide useFactory deps $injector

Bonus extras
- Multi-slot transclution
- ngModel <-> ControlValueAccessor
- Protractor support

Next
- Lazy loading Angular/AngularJS
- less boilerplate/Better tooling

## Jeff Cross: Angular Pre-rendering for SEO, speed and happy users
PatricJSing

Pre-Rendering
universal with Angular v4

Universal; first-class part of Angular
Vikram Akex Jason

Blog use-case

Fast Loading
53% abandon in 3 sec in mobile

Scrapable

Crawlable


Fast Loading
- Optimizations for quick download & bootstrap
  - AoT
  - Lazy loading
- oppotunity for improvement
  - Time between html load and bootstarp
  
- Time to First Meaningful Paint
- TIme to interactive

Scrape-able
- Prefer specific meta tags
  - Prominent scraper will fall back to body
- Prefer canonical URLs
- Typically do not execute JS

Crawlable
- Requirements
  - Title
  - Meta
  - Canonical URLS
  - Page content
- will execute JS
  - Googlebot
  - but pre-rendering is recommended

http://nrwl.io/seo

ServerModule
override platform-specific features
- http
- location
- DOM

Render
Considerations
- Number of pages
  - Numver of product, articles, ...
  - i18n
  - User data
- Content freshness requirements
- Frequency of application deployments

Serve
- Pre-rendered HTML from cache or lazy render

Bootstrap & Swap
- Pre-rendered document is served
- Angular begins bootstrapping app in browser
- Pre-rendered component destroyed and replaced

Record&Replay
Don't render interactive view vs Record&Replay
- Use preboot.js
  - Records mst user events on pre-rendered html
  - Replay events
- Use sparingly and consistently

documentation on angular.io coming soon

## Alyssa: bootstrap
Twitter bootstrap
66 !important by default

Options
- Completely remove bootstrap
- Completely remove bootstrap **nicely**

A Complete Guide to Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## Jason Aden: Packaging Angular Libraries

Ecosystem
- Components are the cornerstone
- Establish a contract
- Recommendation attempts to support tooling used today

App Devs Want
- npm install ui-library
- Import components
- AoT and Tree-shaking

AOT support requirements
- Type Definitions: ui-library.d.ts
- Metadata Files: ui-library.metadata.json

Producing Required Assets
- NGC
  - ngc instead of tsc

NGC Process
TS -> Angular Compiler -> js + metatada.json + d.ts
ngfactory is version-specific. don't publish

tsconfig.json
- compilerOptions
  - declaration: true
  - module: es2015
  - target: es5
- angularCompilerOptions
  - strictMetadataEmit: true: emit error
  - skipTemplateCodegen: true: avoid to generate ngfactory, ngstyle

Example
- rollup
- tsconfig.json: for vscode
- src/index.ts
- src/package.json: for publish w/ peerDeps
  - "module": "index.js": Tell Root for **ES Module** to webpack
- build.sh
  - ngc -p src/tsconfig-build.json
  - cp src/package.json dist/package.json

Summary
- AOT ready
- *.d.ts
- *.metadata.json

Strategy for Optimization
- Publish fewer ES Modules
- Suggest you use Rollup
- Flat ECMAScript Modules (FESM)
- Inline Templates & Styles
- Cost of Small Modules

"Kitchen Sink" NgModule like material2: BAD
Re-exporting all components in NgModule
Avoid as this break tree shaking
BoxModule, HighlightModule -> UiLibraryModule -> DONOT USE

Basic Optimization
NgModule per Component

FESM
- angularCompilerOptions
  - flatModuleOutput: "simple-ui-lib.js"
  - flatModuleId: "simple-ui-lib"
- rollup build/simple-ui-lib.js -o dist/simple-ui-lib.js
  - bundle only lib sources
- rsync -a --exclude=*.js ./build ./dist
  - support AoT

Rollup into FESM
Inline FTML & CSS

Advanced Optimization
Closure Compiler is optimized for ES2015
Publish ES2015 and FESM and ES5
- angularCompiletOptions
  - annotateForClosureCompiler: true : add annotation comments
- compilerOptions
  - target: es2015
- tscofig-es5.json
  - target: es5
- NGC and Rollup twice
  - -build, -es5
- package.json
  - module: simple-ui-lib.es5.js (ESM ES5)
  - es2015: simple-ui-lib.js (FESM)

Summary
- Ship ES2015 code
- annotateForClosureCompiler

Angular Package Format
- Support Webpack and Rollup, 
- Support AOT 
- Tree-shaking
- Optimization

goo.gl/AMOU5G

material2 beta3 w/ FESM!

## Doguhan: Do More with Less JavaScript

too many stacks

sticks default, best practices
Angular + npm + TypeScript = any tasks
@doluca

## Key Snyder: Create and Attend Meetups

Why Meetups

Consistent Time & Location?
Food?
Keep it free?
Interesting Topics?
Use Meetup.com

FAQ

Hands on Oppotunities
Lightning Rounds
Have a Backup plan
Start Small and Be Patient

Advertise

Attends

## Shmuela: ngGirls

Breaking Bias

ngFirls organize over the world
@AngularGirls
ng-girls.org

## Bred McGowen: Firebase and GCF 
@bretmcg

What is serverless
abstract about all of servers

Mess of servers
-> Device and code();

Serverless
- Fully managed: don't think about servers
- Pay for what you use and no up front provisioning
- Scales as needed

BaaS
Firebase
Many features

Realtime Database
- Cloud hosted NoSQL
- Offline-support

Authentication

Cloud Messaging

Not-Yet-a-Service-as-a-Service #NYaSaaS 

Cloud Functions

firebase deploy --only functions

spin-up for first request

bit.ly/ngconf-functions

## Stephen: Best Practice

https://angular.io/styleguide

Bundles: 
smaller bundles = faster apps

314K -> 70KB (vendor.js.gz)

Tip 1 Measure: source-map-explorer
ng build --prod -sm
source-map-explorer ./dist/vendor*.js

Your Bundle Just Exploded
rxjs and material Module and AngularFire2

source-map-explorer ./dist/main*.js
source-map-explorer ./dist/0*.chunk.js
source-map-explorer ./dist/1*.chunk.js

Tip 2 AoT
eliminate compiler

Tip 3 Stay up the Date
keep up to date

Short Story about Igor

Tip 4 Import carefully
rxjs: 191kB
import { Observable } from 'rxjs/Observable': Tree-shakable

material2
331kB
import {MdToolbarModule} from '@angular/material'

other libs
check if it offers smaller imports
Treeshaking will help long term

Tip 5: Lazy Load
- Lazy load your home screen
- Lazy load your admin section (forms)
- Lazy load your content views
- Lazy load everything

Tip 6: Polyfill Responsibly

decide browsers to support

- es6/reflect, rs7/reflect -> no needed on AoT

## Panel

- CLI
  - shared module: coming
- Material
  - componentdevkit
    - open at out of beta
- Compiler
  - ts2.3 transformer pipeline
    - ngc wraps tsc
    - from 2.3, ngc as plugin system
- AngularJS
  - no need to upgrade without something want to do
  - $compile
    - very dynamic app
    - how upgrade?
    - 2 options
      - JiT
      - code generation
- Stateful
  - Reactlike API
  - Looking for best way to integrate with Reactive Programming
  - Angular CD is faster than React
- i18n
  - next
    - in source code
- Enterprise use-case
- Contribution
  - Small fix to doc

