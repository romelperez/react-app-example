# Project Architecture

## Stack

### Platforms

- Node v4+
- Ever green browsers

### Languages

- ES2015
- JSX
- SASS

### Tools

- Express
- React
- Redux
- Immutable
- jQuery
- VulcanVal
- VulcanUp

### Automation

- Gulp
- Webpack
- Bower
- Hologram
- Karma
- Mocha

## File structure

- `node_modules/` - Server and universal modules
- `bower_components/` - Client libraries
- `package.json` - Server conf
- `karma.conf.js` - Karma conf
- `webpack.config.js` - WebPack conf
- `hologram_config.yml` - Hologram conf
- `bower.json` - Bower conf
- `gulpfile.js` - Gulp conf

- `docs/` - Documentation
  - `spec/` - Specification
  - `design/` - Architecture and design
  - `styleguide/` - Style design system
  - `client/` - Client API docs
  - `server/` - Server API docs
- `bin/` - Executables
  - `server.js` - Server
- `tasks/` - Tasks conf
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
    - `tools/` - Tools
    - `i18n/` - Internationalization
    - `data/` - Data utils
    - `components/` - React components
    - `core/` - Core script
      - `analytics.js`
      - `core.js`
    - `[application]/` - Application template
      - `components/` - Specific components
      - `actions/`
      - `reducers/`
      - `store/`
      - `routers.js`
      - `render.js`
      - `constants.js`
      - `[application].js`
    - `settings.js` - Client side conf
  - `scss/`
    - `core/` - Core styles
      - `core.scss`
    - `components/` - React components styles
    - `tools/` - SASS utils
    - `[application]/` - Application template
      - `components/`
      - `[application].scss`
    - `_settings.scss`
- `test/` - Universal tests
  - `components/`
  - `integration/`
- `dist/` - Client built code
