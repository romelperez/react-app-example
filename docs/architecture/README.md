# Project Software Design and Architecture

----

## Budget

- Support
  - Browsers with at least HTML5, CSS2.1 and ECMAScript5
  - Internet Explorer from version 10
  - Mobile devices with minimum viewport of 320 pixels
- Accessibility
  - All public facing content should be SEO friendly
  - All public facing content should be crawlable at page load
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

_These should be determined by business, demography, concurrency, among many other factors._

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
- Ever green browsers

### Languages

- [ES2015](https://en.wikipedia.org/wiki/ECMAScript)
- [JSX](https://jsx.github.io)
- [SASS](http://sass-lang.com)

### Tools

- [Express](http://expressjs.com) - Server
- [React](https://facebook.github.io/react/) - JS view library
- [Redux](http://redux.js.org) - Predictable state container for JS apps
- [Immutable](https://facebook.github.io/immutable-js/) - Immutable collections for JS
- [Material UI](http://www.material-ui.com) - Frontend framework
- [jQuery](http://jquery.com) - General JS library

### Tasks and automation

- [Babel](http://babeljs.io) - ES2015 transpiler to ES5
- [Gulp](http://gulpjs.com) - Tasks runner
- [Webpack](http://webpack.github.io/) - JS module manager
- [React StyleGuide](https://github.com/sapegin/react-styleguidist) - React style guide generator
- [jsdoc](http://usejsdoc.org) - API docs generator
- [apidoc](http://apidocjs.com) - Server API docs generator
- [Mocha](http://mochajs.org) - Test runner in node.js
- [Karma](http://karma-runner.github.io) - Test runner in browser

----

## Structure

### General

- `node_modules/` - JS Modules
- `package.json` - Server conf
- `webpack.base.js` - WebPack base conf
- `webpack.config.js` - WebPack conf
- `gulpfile.js` - Gulp conf
- `styleguide.config.js` - React StyleGuide conf
- `jsdoc.json` - jsdoc conf
- `karma.conf.js` - Karma conf
- `.babelrc` - Babel default conf
- `.editorconfig` - Editor conf
- `.eslintrc` - ESLint conf
- `.gitignore`
- `.gitattributes`

### Project

We store the general project configuration at `package.json` property `project`.

Separate client and server side code in different locations. If there is code used universally, we place it in the `src` folder. Also, there are docs, automation tasks, executables, tests, and a client side distribution folder for public access.

We isolate the components and modules code (design and functional), tests and docs. But we store resources at distribution folder `dist`, general JS at `src/core` and global styles at `src/scss`.

A page can be static or an SPA. If static, the entire page will be generated in server side with universal components using the application `src/app7/server.js` entry point. If SPA, most of the page will be generated by dynamic client JS `src/app7/index.js`, but can render from server.

The client source will be used to generate distribution files without nested folders. Example: `src/app7/index.js` should generate `dist/js/app7.js`.

- `docs/` - Documentation
  - `spec/` - Specification
  - `design/` - UI/UX designs
  - `architecture/` - Software design and architecture
  - `styleguide/` - React components style guide
  - `js/` - Universal API docs
  - `api/` - Server API docs
  - *`user/` - User documentation*
- *`tasks/` - Automated tasks conf*
- `bin/` - Executables
  - `server.js` - Server
- `api/` - Server API
  - `log.js` - Logger
- `views/` - Server templates
- *`lib/` - Client static libraries*
  - *`js/`*
  - *`css/`*
- `src/` - Source code
  - *`tools/` - General tools*
  - *`i18n/` - Internationalization*
  - *`data/` - Server persistence utils*
  - `components/` - React components
  - `scss/`
    - *`tools/` - SASS utils*
    - `core/` - Core styles
      - `core.scss`
    - `[application]/` - Application template
      - `[application].scss`
    - `_settings.scss`
  - `core/` - Core utils
    - `index.js`
  - `[application]/` - Application template
    - `containers/` - React container components
    - *`data/`*
    - *`actions/`*
    - *`reducers/`*
    - *`stores/`*
    - *`routers.js`*
    - *`constants.js`*
    - `render.js`
    - *`server.js` - Server page generator*
    - `index.js` - Client SPA script
  - *`[resource]/` - Resource source, such as images or SVGs*
  - `settings.js` - Client side conf
- `dist/` - Public assets and built client code
  - `css/`
  - `js/`
  - *`files/` - Dynamic files by users*
  - *`img/`*
  - *`fonts/`*
  - *`audio/`*
  - *`video/`*
- `test/` - Tests
  - `api/`

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
| `npm run build-sass:watch` or `gulp` | Start SASS builder with watcher |
| `npm run test` | Run all tests |
| `npm run docs` | Generate all documentations |

### System variables

- `NODE_ENV` - Node environment
  - `development` (default)
  - `test`
  - `production`
- `PORT` - Server port
- `ENABLE_TUNNEL` - Enable tunnel by [ngrok](https://ngrok.com)
- `TRAVIS` - Define [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) environment (referring to [travis-ci](http://travis-ci.org))
