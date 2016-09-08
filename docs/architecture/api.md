# API

We use [npm scripts](https://docs.npmjs.com/misc/scripts) as API to our project.

## Installation

```bash
$ git clone git@github.com:romelperez/react-app-example.git
$ cd react-app-example
$ npm install
```

## Workflow commands

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

## System variables

- `NODE_PATH` - Folder to add in the node `require('...dependency...')` resolver, which is important to define on the workflow commands because many components/modules in server and client side code use them
- `NODE_ENV` - Node environment
  - `development` (default)
  - `test`
  - `production`
- `PORT` - Server port
- `ENABLE_TUNNEL` - Enable tunnel by [ngrok](https://ngrok.com) on server start
- `TRAVIS` - Define [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) environment (referring to [travis-ci](http://travis-ci.org)) which will make the tests _single-run_
