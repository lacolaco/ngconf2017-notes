# Day 3

## Keynote
Brad, Rob

Angular at Google
Where uses, Why open source

Google runs on Angular
Enterprise 2 handreds
Goal by end 2017
Automatic Closure to TypeScript (deprecated typed js)
Material 1 + Material 2 (works together)
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

