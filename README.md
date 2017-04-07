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
- [ ] Mobile-Toolkit road map > Maxim, Jeff
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



