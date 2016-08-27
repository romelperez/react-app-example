# Project Software Design and Architecture

----

## Budget

How we decide some project features based on people, time, money, and other investment factors, along with more technical factors such as business, demography, concurrency, among others.

- Support
  - Browsers with at least HTML5, CSS2.1 and ECMAScript5
  - Internet Explorer from version 10
  - Mobile devices with minimum viewport width of 320 pixels
- Accessibility
  - All public facing content should be SEO friendly
  - All public facing content should be crawlable at page load
  - Available in languages: English
- Performance
  - Public pages should weight less than 3MB on initial load
  - Public pages should load first content in less than 2 seconds through _Regular 4G_ connection, applications can take longer
  - Optimize and minimize assets
  - Enable compression and cache for eligible resources types
  - Data endpoints should disable cache
  - Use CDNs for resources when available
- Security
  - HTTPS enabled
- Most components and modules should be unit tested
- Most APIs should be documented
- Should be scalable

----

## Methodologies

- [Unix philosophy](https://en.wikipedia.org/wiki/Unix_philosophy)
- [Functional programming](https://en.wikipedia.org/wiki/Functional_programming)
- [Behavior-driven development](https://en.wikipedia.org/wiki/Behavior-driven_development)
- [Udacity Git Styleguide](http://udacity.github.io/git-styleguide)
- [FIRST](https://addyosmani.com/first)
- [CommonJS](http://commonjs.org)
- [Atomic design](http://atomicdesign.bradfrost.com)
- [BEM](https://en.bem.info)
- [Mobile First](http://zurb.com/word/mobile-first)
- [JS/React Style Guide](https://github.com/airbnb/javascript)
- [CSS/SASS Style Guide](https://github.com/airbnb/css)

_Some methodologies apply in certain cases or partly._

### General rules and conventions

- Codification UTF-8
- 2 space indentation
- File names, lowercase, words split by dashes
- Testing files names should end with `-test`
- The main file in a component/module should be called `index`
- No more than 80 characters per line of code
- Modules should not be more than around 100 lines of code (without docs)
- Modules dependencies must be placed at the beginning
- Modules exports should be defined at the end (when eligible)
- CSS animations/transitions over JS animations
- Font icons over CSS image sprites
- JavaScript variables and function names, camel case, avoid single letters
- React components folders are capitalized and the `index.js` file is the exported
- Classes folders are capitalized and `index.js` file is the exported

### Design

- **General**:
  - Use `box-sizing` with `border-box`.
  - Use `rem` for font sizes. Pixels for everything else.
- **Layouts**:
  - A layout is only concerned with its children horizontal or vertical alignment and spacing.
  - Layouts can have margin bottom and margin right to separate.
- **Components**:
  - A component never imposes element styles on its children. Component styles only target the elements inside.
  - The component itself never has floats, widths, heights or margins. It should not have background.
  - There can be components that can behave as elements.
- **Elements**:
  - Every element has a single, unique, component-scoped class.
  - All styles are applied directly to that selector, modified only by contexts and themes.
  - Themes and other data attributes never force changes in appearance; they are always a context that layouts, components, and elements can subscribe to.
  - No element will have top or left margins, they can have right or bottom margins and all last children will have their margins cleared. The first element touches the top of its component.

_Some rules from [Frontend Architecture for design systems](http://shop.oreilly.com/product/0636920040156.do)._

----

## Project workflow

- By Iteration of _(not necessarily in this order)_:
  - Requirements and specifications
  - Architecture and software design
  - Chores: structure, tools and processes automation
  - By Iteration of _(not necessarily in this order)_:
    - User interface design
    - Components and functionalities
    - Testing
    - Documentation

----

## Stack

### Environment tools

- [Unix shell](https://en.wikipedia.org/wiki/Unix_shell)
  - [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)
- [Git](https://git-scm.com)
- [Atom](http://atom.io)
  - [editorconfig](https://atom.io/packages/editorconfig)
  - [linter](https://atom.io/packages/linter) plugin [eslint](https://atom.io/packages/linter-eslint)
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)
  - [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

### Platforms

- [Node](http://nodejs.org) v4+
- [MongoDB](http://mongodb.org)
- Ever green browsers

### Languages

- [ES2015](https://en.wikipedia.org/wiki/ECMAScript)
- [JSX](https://jsx.github.io)
- [CSS3](https://developer.mozilla.org/en/docs/Web/CSS/CSS3)
- [SASS](http://sass-lang.com)

### Tools

- [Express](http://expressjs.com) - Server
- [Mongoose](http://mongoosejs.com) - Database object modeling
- [React](https://facebook.github.io/react/) - JS view library
- [Redux](http://redux.js.org) - Predictable state container for JS apps
- [Immutable](https://facebook.github.io/immutable-js/) - Immutable collections for JS
- [jQuery](http://jquery.com) - General JS library

### Tasks and automation

- [Babel](http://babeljs.io) - ES2015 transpiler to ES5
- [Gulp](http://gulpjs.com) - Tasks runner
- [Webpack](http://webpack.github.io/) - JS module manager
- [Mocha](http://mochajs.org) - Test runner in node.js
- [Karma](http://karma-runner.github.io) - Test runner in browser
- [React StyleGuide](https://github.com/sapegin/react-styleguidist) - React style guide generator
- [jsdoc](http://usejsdoc.org) - API docs generator
- [apidoc](http://apidocjs.com) - Server API docs generator

----

## Structure

### General

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

### Project

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
      - *`actions/`*
      - *`reducers/`*
      - *`stores/`*
      - *`routers.js`*
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
  - `[TYPE]/`
    - `setup.js` - Optional testing environment setup

_Optional folders in cursive._

_Dynamic names are marked as [NAME]._

----

## API

We use [npm scripts](https://docs.npmjs.com/misc/scripts) as API to our project.

### Installation

```bash
$ git clone git@github.com:romelperez/react-app-example.git
$ cd react-app-example
$ npm install
```

### Workflow commands

| Command | Description    |
| :------ | :------------- |
| `npm run start` | Start development server |
| `npm run start:tunnel` | Start development server with [ngrok](https://ngrok.com) tunnel |
| `npm run start:production` | Start production server |
| `npm run build` | Build development assets |
| `npm run build:production` | Build production assets |
| `npm run build-js:watch` or `webpack -w` | Start JS builder with watcher |
| `npm run build-css:watch` or `gulp` | Start SASS builder with watcher |
| `npm run test` | Run all tests |
| `npm run docs` | Generate all documentations |

### System variables

- `NODE_PATH` - Folder to add in the node `require('...dependency...')` resolver, which is important to define on the workflow commands because many components/modules in server and client side code use them
- `NODE_ENV` - Node environment
  - `development` (default)
  - `test`
  - `production`
- `PORT` - Server port
- `ENABLE_TUNNEL` - Enable tunnel by [ngrok](https://ngrok.com) on server start
- `TRAVIS` - Define [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) environment (referring to [travis-ci](http://travis-ci.org)) which will make the tests _single-run_
