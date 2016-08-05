# Project Architecture

## Stack

### Environment tools

- Unix
- Git
- Atom
- Chrome Dev Tools

### Platforms

- Node v4+
- Ever green browsers and IE11

### Languages

- ES2015
- JSX
- SASS

### Methodologies

- [CommonJS](http://commonjs.org)
- [TDD](https://en.wikipedia.org/wiki/Test-driven_development)
- [Atomic Design](http://atomicdesign.bradfrost.com)
- [BEM](https://en.bem.info)

### Tools

- Express
- React
- Redux
- Immutable
- jQuery

### Tasks and automation

- Gulp - Tasks runner
- Webpack - JS module manager
- Bower - Libraries manager
- Hologram - Design system generator
- Karma - Testing environment
- Mocha - Test runner

## File structure

### General

We use [npm scripts](https://docs.npmjs.com/misc/scripts) as API to our project.

- `node_modules/` - Server and universal modules
- `bower_components/` - Client libraries
- `package.json` - Server conf
- `karma.conf.js` - Karma conf
- `webpack.config.js` - WebPack conf
- `hologram_config.yml` - Hologram conf
- `bower.json` - Bower conf
- `gulpfile.js` - Gulp conf

### Project

Separate client and server side code in different locations. If there is code used universally, we place it in the client folder. Also, there are docs, automation tasks, executables, tests, and a client side distribution folder for public access.

We don't organize the files by isolated client components. We distribute them by category: **functional** `src/js/`, **design** `src/scss/` and **resources** `dist/`. Possible source resources should be in `src/[RESOURCE]/`.

The client source will be used to generate distribution files without nested folders. Example: `src/js/app1/app1.js` should generate `dist/js/app1.js`.

- `docs/` - Documentation
  - `spec/` - Specification
  - `design/` - Architecture and design
  - `styleguide/` - Style design system
  - `client/` - Client API docs
  - `server/` - Server API docs
  - `user/` - User documentation
- `tasks/` - Automated tasks conf
- `bin/` - Executables
  - `server.js` - Server
- `api/` - Server API
  - `models/` - Data models
  - `urls/` - Endpoints
  - `log.js` - Logger
  - `database.json` - Database file
- `views/` - Server JSX templates
- `lib/` - Client static libraries
  - `js/`
  - `css/`
- `src/` - Client and universal source code
  - `js/`
    - `tools/` - General tools
    - `i18n/` - Internationalization
    - `data/` - Data utils
    - `components/` - React components
    - `core/` - Core utils
      - `analytics.js`
      - `core.js`
    - `[application]/` - Application template
      - `containers/` - React container components
      - `actions/`
      - `reducers/`
      - `stores/`
      - `routers.js`
      - `render.js`
      - `constants.js`
      - `[application].js`
    - `settings.js` - Client side conf
  - `scss/`
    - `components/` - React components styles
    - `tools/` - SASS utils
    - `core/` - Core styles
      - `core.scss`
    - `[application]/` - Application template
      - `[application].scss`
    - `_settings.scss`
- `dist/` - Client assets and built client code (the public folder)
  - `files/` - Dynamic files by users
  - `css/`
  - `js/`
  - `img/`
  - `fonts/`
  - `audio/`
  - `video/`
- `test/` - Universal tests
  - `integration/`
  - `tools/`
  - `components/`
  - `[application]/`
