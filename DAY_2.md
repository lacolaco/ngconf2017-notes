# Day 2

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

## [Building a roboarmy with Angular - Sebastian Witalec](https://www.youtube.com/watch?v=RE7m-BcGukQ)

@sebawita
Jack of all Angular Master of Robots

Robots

Bluetooth

FUnctionality is grouped into service
- Services
  - Characteristics
  - Dashboard(fa00) 
      - Speed indicator(fa06)
      - Fuel indicator(fa1c)
  - Weapons(fb00)
  - Drive control(fd00)

Services contain characteristics

Run Bluestooth from Web Mobile

Web Bluetooth
- Chrome dev

Step.0 Add web-bluetooth
- npm install @types/web-bluetooth

Step.1 Find a matching Device

```ts
let device  = await navigator.bluetooth.requiesrDevice({
  filters: [{namePrefix: 'Mambo'}],
  optionalServices: [serviceUUID], // interested in using
})
```

Step.2-4 Connect an get characteristic

```ts
let server = await device.gatt.connect();
let service = await server.getPrimaryService(serviceUUID);
let characteristic = await service.getCharacteristic(characteristicUUID);
```

Step.5 Read/Write

```ts
const value = await characteristic.readValue();
console.log('val: ' + value.getUint8(0));
```

```ts
const instructions = new Int8Array([0x02, 0x32, 0xFF]);
characteristic.writeValue(instruction);
```

Drones

mambo-angular-service
- Angular Service to control Parrot Mamo drone

```ts
this.drone = await this.mamboService.search();
this.drone.takeOff();
```

Demo

What about going beyond Chrome?
- if you want to use on Android, iOS

Bluetooth from a mobile app with NativeScript
- web bluetooth is limited
  - one connection
- mobile devices: 10 devices

NativeScript
- open source framework for building truly native mobile apps and get native UI and perf

4 steps
- 0. Add nativescript-bluetooth
- 1. Request permissions
- 2. Scan for device
- 3. Connect to it
- 4. Read/Write from the Characteristic

Step 0
- `tns plugin add nativescript-bluetooth`

Step 1

```ts
import bluetooth = require('nativescript-bluetooth')

bluetooth.requirestCoarseLocationPermission().then(() => {
  console.log('Location permission requested')
})
```

Step 2

```ts
bluetooth.startScanning({
  seconds: 3,
  onDiscovered: (peripheral: Peripheral) => {
    console.log('Device UUID: ' + peripheral.UUID);
    console.log('Device name: ' + peripheral.name);
  }
})
```

Step 3

```ts
bluetooth.connect({
  UUID: deviceUUID,
  onConnected: () => {}
  onDisconnected: () => {}
})
```

Step 4

```ts
bluetooth.read({
  peripheralUUID: deviceUUID,
  serviceUUID, characteristicUUID
}).then((result) => {})

bluetooth.writeWithoutResponse({
  peripheralUUID: deviceUUID,
  serviceUUID, characteristicUUID,
  value: '0x02 0x32 0xFF'
})
```

nativescript-mip-ble
- NativeScript plugin that allows to control a Mip robot

Difficult parts: knowing
- what commands to send
- what services to send
- cannot find anyone in documentaion how to use

Android Developer Tools
- Bluetooth HCI snoop log
  - logging all the bluetooth communication
- log to wireshark
  - inspect all the packets
- reverse engineering the original drone app

Summary
- Bluetooth is easy
- Use NativeScript
  - for Android and iOS apps support
  - up to 10 devices
- Use Web BlueTooth
  - to run in Chrome on Mac and Windows and Android
  - only **one** device
- For WebBluetooth w/ Observables
  - @nanekinekko/angular-web-bluetooth
- Reverse engineering
  - Android HCI Snoop log
  - Together w/ Wireshark

## [RxJS: The Good Parts - Christopher Gosselin & Daniel Figueiredo Caetano](https://www.youtube.com/watch?v=TszoFCFydiM)

https://github.com/danielfigueiredo/rxjs-goodparts

What is RxJS

How does RxJs relate to Angular
- everywhere
  - http  
  - Router
  - Output/ EventEmitter
  - Forms

Common Operators

Creating observables
- of(a, b, c): pass-multi-argument to create
- from([a, b, c]): pass iterable to create

Array-like operators
- filter
- map: convertion
- reduce: only emits on complete
- take: take X events
  - for http: take(1)

useful for browser events
- debounce: waits X amount of time **till last one finishes** before continuing
- throttle: waits X amount of time **between** calls

combining 
- switchMap: cancels all non finished and carries oon with current one
  - aka flatMap
- mergeMap: returns new one that will be used henceforth
- zip: outputs continuously matching streams
  - combine http requests
- combineLatest: wheneven a change happend, take latest from all and continue on

utilities
- toArray: wait until stream is done and combines into 1 array
- share: allows you to say at this point, whenever subscriber go from 0 to 1, use what last evaluation was

errors
- retry: will retly until no errors, or retry a bunch of times

erors go through the onError channel

they halt the sequence
- on error, the stream will stop

Error levels
- class level
- instance level

Class level errors
- swallowing errors

```ts
const source$ = Observable.catch(
  Observable.ajax.get('http://stream1'),
  Observable.ajax.get('http://stream2'), // fallback
  Observable.from(local.get('default')), // fallback
)
```

Ignoring errors
- execute series of independent events no matter what
- onErrorResumeNext()
- takes in any number of observables to be executed

```ts
const source$ = Observable.onErrorResumeNext(
  Utils.myFunction1(),
  Utils.myFunction2(),
  Utils...
)
const log = source$.subscribe(data => console.log(data))
```

Instance level errors
- Deals with errors from a specific Observable
- `catch` function callback
  - like try-cache
- Callback should return an observable

- On error the source emits the observable returned from `catch`
- 

```ts
const source$ = Observable.ajax.get(url)
  .catch(err => Observable.from({err, errMsg: 'My error'}));
```

Finally reminder
- you can use `finally`
- finally vs complete callback
- Runs after completed, regardless the output or error
  - use-case: clean up resources

```ts
DbUtils.getData()
  .catch(err => log(err))
  .finally(() => socket.close())
  .subscribe(data => socket.send(data))
```

TypeScript w/ observable

generic parameters
- `Observable<T>`
- each operator also has its own parameters

How to use `map` with types
- receiving type
- returning type

```ts
source$.map<Cat, Dog>(cat => {
  return { name: cat.name, age: cat.age };
})
```

Performance and RxJS

Array operators and RxJS operators: millions data
- [] > filter > map > reduce
- from() > ...

- Array: 0.14s
- RxJS: 0.08s
- No overhead

Why?

RxJS works like a funnel
- Each element goes through all operators
- Array function iterates the whole array every time <- overhead

## [Turbocharge Your Angular Testing Workflow - Victor Mejia](https://www.youtube.com/watch?v=wj3dStoEhso)

- https://ngtest-turbo.firebaseapp.com/#/?_k=bi736x
- https://github.com/victormejia/ngconf2017-test-demo

Few tips you can use to turbocharger angular testing workflow

Biggest hurdle = Setup + Configuration

Angular CLI
- ng new + ng test
- --single-run
- --code-coverage

karma-spec-reporter
- npm i -D karma-spec-reporter
- edit karma.conf.js
- https://github.com/victormejia/ngconf2017-test-demo/commit/19ac83f

Feedback loop for results
- wallaby.js
- realtime testing feedback
- https://github.com/wallabyjs/ngCliWebpackSample
- https://github.com/victormejia/ngconf2017-test-demo/commit/7684a23

TestBed API
- easy
- `configureTestingModule`

Maintaining Tests

Organize tests
- describe separation
  - per component intaraction and functionality

a test should tell a story
- it sentence
  - meaningful readble sentence
  - don't follow DRY "to a tee"

mock dependencies to isolate tests

enforce coverage thresholds
- karma-instanbul-threshold
- https://github.com/victormejia/ngconf2017-test-demo/commit/abe56faa

prevent bad commits with husky
- npm i -D husky
- precommit: npm run lint
- prepush: ng test --single-run --code-coverage

## [Interactive video apps with Videogular2 - RAUL JIMENEZ HERRANDO](https://www.youtube.com/watch?v=1J0uQCj0Zm8)
http://slides.com/elecash/interactive-video-apps-with-videogular2#/

- demo: https://github.com/videogular/custom-element-demo
- demo: https://github.com/videogular/pip-demo

videogular
- media framework for Angular 
  - more than a video player
- create your own player declaratively
- Extensible via an intermediate API
- You can "play" anything that has a begin and an end
  - not only video

videogular2
- 6 modules
- 17 components
- 4 directives
- 6 serivces

VgPlayer
- contains VgMedia, VgPlay, ... 
- calls VgAPI

```html
<vg-player>
    <vg-play-pause></vg-play-pause>

    <video #videoRef 
           [vgMedia]="videoRef" 
           id="video" 
           src="http://static.videogular.com/assets/videos/videogular.mp4">
    </video>
</vg-player>
```

more complex

```html
<vg-player>
    <vg-overlay-play></vg-overlay-play>

    <vg-controls>
        <vg-play-pause></vg-play-pause>
        <vg-time-display vgProperty="current" vgFormat="mm:ss"></vg-time-display>
        <vg-scrub-bar>
            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>
        </vg-scrub-bar>
        <vg-time-display vgProperty="left" vgFormat="mm:ss"></vg-time-display>
        <vg-mute></vg-mute>
        <vg-volume></vg-volume>
        <vg-fullscreen></vg-fullscreen>
    </vg-controls>

    <video #media [vgMedia]="media" [vgHls]="streamingUrl" id="singleVideo" preload="auto"></video>
</vg-player>
```

VgMedia
- wrapper for HTML5 video/audio
- attach `[vgMedia]` to video/audio and...
- any "playable" elements!

```html
<vg-player>
    <vg-controls>
        <vg-play-pause></vg-play-pause>

        <vg-scrub-bar>
            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>
        </vg-scrub-bar>

        <vg-fullscreen></vg-fullscreen>
    </vg-controls>

    <app-time-viewer #timerRef 
                     id="timer" 
                     [vgMedia]="timerRef" 
                     [duration]="videoRef.duration">
    </app-time-viewer>
</vg-player>
```

Multiple VgMedia
- automatic register: `[vgMedia]`
- you can register new one programmatically

VgMaster
- `[vgMaster]=true`
- controls depends on this

VgFor
- control dependency

```html
<vg-player>
    <video #videoRef
           [vgMedia]="videoRef"
           [src]="source"
           id="myVideo">
    </video>
    
    <vg-play-pause></vg-play-pause>
    <vg-mute vgFor="myVideo"></vg-mute>
</vg-player>
```

## [Diving into TypeScript - Dan Wahlin & John Papa](https://www.youtube.com/watch?v=i3iNDdshgrc)

## [Using Components in Angular 1.5 - Jennifer Bland](https://www.youtube.com/watch?v=7eQbQN-Dzm0)

angular 1.5 components for easier migration to angular 2

https://github.com/ratracegrad/ngconf-components-angular15
- master, perfect

- Angular Sep 2016
- React is repidly growing in popularity
- Both: component-based architecture
- AngularJS: NOT
- AngularJS 1.5: supports for components

Components in AngularJS
- syntax-sugar for .directive()
- replace-able by .directive()
- Easier to create
- Default to best practive
- Easier to upgrade to Angular

Components in 1.5
- isolate scope by default
- use controllers instead of link
- automatic controllerAs
- bindToController by default

```
app.component('models', {
  bindings: { make: '=' },
  templateUrl: 'models.html',
  controller: function ModelsCtrl() {}
})
```

New features
- One-way data biding
  - pass something without coming back to parent
  - careful: passing object (actually same object)
- Lifecycle hooks
- Stateless components

Lifecycle events
- $onInit
- $postLink
- $onChanges
- $onDestroy

Component Structure

Directory Structure
- components

Stateless Components
- have no bindings
- show HTML only

## [Powering Content Driven Applications with the World’s Most Popular CMS - ROY SIVAN](https://www.youtube.com/watch?v=-PxlDHSgXQY)

@royboy789

WordPress
- Why WP?
- How to build with WP

WordPress
- Popularest CMS

Why?
- usage
- WP 27.7%
- Joomla 3.3%
- Drupal 2.2%

enterprise concerns
- No LTS
- Open Source
- Mow many updates per year?

Hater gonna hate

Enterprise benefits
- Do you want to build another CMS?
  - do you wanner train a team?
- Code, Tutorials, Extendable
- Open Source

internet.org
- WP site

Angular w/ WP

WordPress REST API
- interact w/ WP content

data is sweet, sweet sweet json
/wp-json/wp/v2/posts

Simple Endpoints
- /wp-json/: prefix
- /wp/v2/: namespace (default)
- /posts, /pages, /comments, ...


Custom API routes
- namespaces: [ /oembed/1.0, wp/v2 ]
- plugins
- multiple applications with same data
- custom route written in PHP
  - `add_action('rest_api_init', array($this, 'custom_commision_routes'))`
  - `register_rest_route`

Use-cases
- Ionic, NativeScript Native Apps
- Decoupled apps that utilize WP content
  - tech team, non-tech team
- Decoupled apps which interact w/ WP site
  - custom micro CMS: quick simple
- Micro widget for other website

Use the ecosystem
- Don't learn new CMS, don't build new CMS
- RESTful API is useful and easy

## [Alexa, create a voice activated chat bot - Terence Carroll](https://www.youtube.com/watch?v=rq23g0YoYGg)

Cinematic Computing
- We've seen it before
- familiar
- we want the future now

Inspiration to Perspiration

Voice design
- Clearly present options
- keep is brief
- avoid too many choices

Create **Skills**
- Invocation Name
  - Alexa, open **Nerd Bot**
  - Alexa, ask **Nerd Bod** who is Kylo Ren
- Skills are now auto-enabled

Interaction Model
- Skills
  - Custom app
  - Smart Home
    - lights on/off
  - Flash Briefing
    - read news at morning

Interaction Model
- Intents
  - Actions
- Slots
  - Parameters
- Utterances
  - Phrases
- wiki_awho (INTENT) who is {WHO}(SLOT)

Server
- Json response from HTTPS
  - Node.js
    - JavaScript to create Skills
  - AWS Lambda
    - Alexa Skills Kit

Demo
- https://github.com/thack/ngconf17
- using Glitch
  - edit code
  - show debug view
    - web forms for alexa
- alexa skills kit
  - testing
    - web forms
    - listen the response as the voice
- https://echosim.io
  - alexa skill testing tool on browser
- connect to Ionic and Firebase 

## [Docker: What Every Angular Developer Should Know About It! - Dan Wahlin](https://www.youtube.com/watch?v=socWfhPJptE)

Windows, Linux, Mac, ...

Angular on Docker
- Docker for frontend developer

http://codewithdan.me/angular-docker

Challenge
- nginx
   - multiple servers
- DB
- Caches (redis)
- down time

How can Docker help?
- Simplefy building, shipping, running
- Provides a shipping container system for code
  - consistent way 
  - verious testing cases
- runs natively on Linux or Windows Server (10+)

Role of Images and Containers
- Docker image
  - Ubuntu with ASP.NET Core and Application code
  - Blueprint
- Docker container
  - created by using an image. Runs your app

Image
- read-only template
  - layered filesystem
  - create Docker container instances

Container
- Isolated and secured shipping container

Docker containers vs Virtual Machines

Demo

Docker Hub
- nginx
- docker pull nginx
- docker run -d -p 8080:80 nginx:alpine
  - daemon mode
  - port

ng serve is not for prod

with Angular
- ng new
- ng build
  - dist folder
- cd dist
- docker run -d -p 8080:80 -v $(pwd):/usr/share/nginx/html nginx:alpine
  - v: volume mounting

AngularCLI app on docker
- debug on real server

Docker benefits
- Accelerate Developer Onboarding
  - consistent way for staging, testing
  - designers, managers, ...
  - easy 
- Eliminate App conflicts
  - new version app
- environment consistency
  - dev/prod on same server
- ship software faster
  - AWS, Azure, ...

Create Docker Environment
- install docker Community Edition
  - for Mac, WIndows
  - both use Alpine Linux
- create  custom Dockerfile
- run docker client

Dockerfile
- Text file used to build docker images
- build instructions
- example
  - FROM microsoft/dotnet
  - MAINTAINER
  - COPY ./var/web/app
  - WORKDIR /var/web/app
  - RUN dotnet restore
  - RUN dotnet build
  - EXPOSE 5000
  - ENTRYPOINT dotnet run
- docker build -t {repo}/{image name}:{tag name}

Docker compose use-case
- many times docker run
- orchestrate services with Docker Compose
- one command

- docker-compose.yml
- Docker Compose Build
  - docker-compose build
- Docker images
- Run
  - docker-compose up
    - run images in proper order
  - docker-compose down

## [The day I met Steve - ALYSSA NICOL](https://www.youtube.com/watch?v=tfw3bhaDbsA)

Communication for Employee

"Special characters, please"
- "It would make our lives easier"
- "I don't make the rules, I just write the code"

Steve
- old mental person
- "grumpy", "difficult"
- jaded

Why does this happen?
- not enough resources
- bos/others takes credit for your work
- lack of autonomy/lack of control or ownership of your work

- These don't seem like huge, just frustrating

frustration turns to anger
- angar turns to apathy
  - just don't care
- apathy turns to full-blown
  - burnout

"Browned out workers feel like a cog in a machine, your not human anymore & nobody cares."

Physical Symptons
- not just fatigue, but sheer exhaustion
- irritability
- inability to concentrate

10% of burnout patients -> cancer after leaving the organization

The night I met Becca
- "I feel numb"
- "I just can't care anymore"
- "I'm literally a glorified typewriter"
- No emotions

Becca is a Steve in the Making

What can we do?
- have other interests yourself
- different community
- remember how you got here

ask yourself
- what passion once burned in you?
- waht are your most meaningful reasons for being a developer

## [FormControl Freaks: Redux Edition - Daniel Figueiredo Caetano & Renee Vrantsidis](https://www.youtube.com/watch?v=vxJUBgTsLgs)

## [TypeScript: What’s New in 2.2 - Daniel Rosenwasser](https://www.youtube.com/watch?v=0Q1lQKE2qbI)

## [Voice User Interfaces with Angular - JEREMY WILKIN](https://www.youtube.com/watch?v=XG4-UsmM2C0)

## [Firebase:Cloud Functions Workshop - JASON DOBRY](https://www.youtube.com/watch?v=QVAkTFiTr34)

## [PrimeNG: Native UI Components for Angular - Kito Mann](https://www.youtube.com/watch?v=yzhARGULsVQ)

## [From Inactive to Reactive with ngrx   Brandon Roberts & Mike Ryan](https://www.youtube.com/watch?v=cyaAhXHhxgk)

## [Everything is a plugin! Mastering webpack from the inside out - Sean Larkin](https://www.youtube.com/watch?v=4tQiJaFzuJ8)

## [DiY Angular Compiler - URI SHAKED](https://www.youtube.com/watch?v=QQ2plVD0gDI)

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

## [Angular Material 2 Workshop - Elad Bezalel & Paul Gschwendtner](https://www.youtube.com/watch?v=NiCoR7cK9JI)

## [Automatic Progressive Web Apps using the Angular Mobile Toolkit   Maxim Slanikov](https://www.youtube.com/watch?v=ecu1vAO23ZM)

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

## [Angular and GraphQL – A modern API for a modern Platform - Uri Goldshtein](https://www.youtube.com/watch?v=rb5i8Bs7-k0)

## [When You Can’t Use the Word “BIG BANG” - ASIM HUSSAIN](https://www.youtube.com/watch?v=4p1jG2QNc4U)

## [Build, Measure, and Machine Learn with Angular - Anna Karpacheva & Sumit Arora](https://www.youtube.com/watch?v=P_FSpwfERAg)

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

## [The Memory Leak Brain Drain – Workshop - Jon Boyd](https://www.youtube.com/watch?v=nS53gCp2swc)

## [Kick Your Components up a Notch with Directives BAM!   Mike Brocchi](https://www.youtube.com/watch?v=VkfHZiMqEd4)

## [Lost in Translation - Oliver Combe](https://www.youtube.com/watch?v=dihyu1a2bPc)

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

## [Step by Step   Improving Startup Performance with Lazy Loading in Angular - Manfred Steyer](https://www.youtube.com/watch?v=8VLYjt81-fE)
