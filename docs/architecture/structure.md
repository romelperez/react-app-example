[Back](./)

# Structure

## General

- `node_modules/` - JS Modules
- `package.json` - Server conf
- `webpack.base.js` - WebPack base conf
- `webpack.config.js` - WebPack conf
- `gulpfile.js` - Gulp conf
- `karma.conf.js` - Karma conf
- `styleguide.config.js` - React StyleGuide conf
- `jsdoc.json` - jsdoc conf
- `.babelrc` - Babel default conf
- `.editorconfig` - Editor conf
- `.eslintrc` - ESLint conf
- `.gitignore`
- `.gitattributes`

## Project

We store the general project configuration at `settings.json`. The client applications settings is located at `src/js/settings.js`.

Client code is located at `src` and server code is located at `server`. If there is code used universally, we place it in the `src` folder.

We isolate components/modules code, tests and docs in their folders. But we place the client design at `src/scss` and resources at distribution folder `dist/[RESOURCE]/`,

Client general JS is located at `src/js/core` and client general styles at `src/scss/core`.

Every project application:

- It will have client/universal code at `src/js/[APP]/` and `src/scss/[APP]/`.
- The client source will be used to generate distribution files without nested folders as `src/js/[APP]/index.js` to `dist/js/[APP].js`.
- If the server generates client HTML code, the server renderer will be at `src/js/[APP]/server.js`.
- An application can contain subaplications with the same structure when small (for example, for static pages).
- The application names should be unique.

File structure:

- `docs/` - Documentation
  - `spec/` - Specification
  - `design/` - UI/UX designs
  - `architecture/` - Software design and architecture
  - `styleguide/` - Components style guide
  - `js/` - Universal API docs
  - `api/` - Server API docs
  - *`user/` - User documentation*
- *`tasks/` - Automated tasks conf*
- `server/`
  - `index.js` - Entry point
  - `log.js` - Logger
- *`static_components/` - Client static libraries*
  - *`js/`*
  - *`css/`*
- `src/`
  - `js/`
    - *`tools/` - General tools*
    - *`i18n/` - Internationalization definition*
    - *`data/` - Server persistence utils*
    - `components/` - React static components
    - `core/`
      - `index.js`
    - `[APP]/`
      - `containers/` - React container components
      - *`data/`*
      - *`store/`*
      - *`actions/`*
      - *`reducers/`*
      - *`selectors/`*
      - *`constants.js`*
      - *`server.js` - Application server entry point*
      - `index.js` - Application client entry point
    - `settings.js` - General conf
  - `scss/`
    - *`tools/` - SASS utils*
    - `core/` - Core styles
      - `core.scss`
    - `[APP]/` - Application design
      - `[APP].scss`
    - `_settings.scss` - General design conf
  - *`[RESOURCE]/` - Resource source, such as images or SVGs to process*
- `dist/` - Distribution folder for assets and built client code
  - `css/`
  - `js/`
  - *`files/` - Dynamic files by users*
  - *`img/`*
  - *`fonts/`*
  - *`audio/`*
  - *`video/`*
- `test/` - Testing setups and suites
  - `integration/` - Data client-server integration suites
  - *`[TYPE]/`*
    - *`setup.js` - Optional testing environment setup*

_Optional folders in cursive._

_Dynamic names are marked as [NAME]._
