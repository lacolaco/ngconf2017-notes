# ngconf2017-notes

## Sessions 

- [Day 1](./DAY_1.md)
- [Day 2](./DAY_2.md)
- [Day 3](./DAY_3.md)

## Misc

### Chat with Victor S.

- Router is on the way of Semver. No breaking without deprecation on 5, 6 and future.

### Discussion about New Http Client with Alex R.

[Example](./http-client.ts)

- `import { HttpClientModule } from '@angular/http'` in 4.1+
  - Keep `HttpModule`, no breaking
- `HttpRequest`, `HttpResponse`, `HttpEvent`, ...
  - `Http` prefix
  - definitely different to Fetch spec
- Interception system
  - No more `RequestOptions`
  - All jobs run by interceptor
    - `JsonpClientModule`: `JsonpInterceptor`
- Http Events
  - Progress event
    - `client.get('/large_file', { observe: HttpObserve.Events })`
- Http Testing
  - No more `MockConnection` and `MockBackend`
  - Use `MockBackendConfig`
    - `config.answer().with([])`
    - `config.verify()`: verify requested count
      - `with({ atLeast: 1, count: 3, atMost, 5})
  - `HttpTestingModule` is nice idea
- `ng g service --http` is good idea

### Talking with Miles 

- ng-japan
  - talk about material2 and flex-layout
  - ask to show the roadmap
  - "do you know @angular/flex-layout?"
- attribute style consistency
  - cannot tell errors as build time
  - camelCase is easy to find angular things
- releasing
  - blocked by new packaging style: FESM

### AMA

- Hans, Matias, Chuck
  - "yarn is better than shrinkwrap, and faster"
  - CLI is a garden. ng eject for plugins

- Mike Brocchi, Raul, Justin
  - About CLI, is there any update on the feature for library creating, building and packaging?
    - After today
    - roadmaped. definitely supports.
    - idea: projectType = app, lib

