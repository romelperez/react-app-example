# Car Seller

## Install

```bash
export NODE_ENV=development
```

```bash
sudo apt-get install ruby-full
gem install hologram
npm install -g bower gulp webpack
npm install
```

## Project workflow

- Iteration
  - Requirements and specifications
  - Architecture and software design
  - Chores: environment and tools, file structure, automated tasks
  - Iteration
    - User interface design
    - Components and functionalities
    - Testing
    - Documentation

## Development workflow

### Start server

```bash
npm start
```

To start a server with ngrok tunnel:

```bash
npm run start:tunnel
```

### JavaScript build (with watcher)

```bash
webpack -w
```

### SASS build (with watcher)

```bash
gulp
```

### Build

Build all source code.

```bash
npm run build
```

Build for production environment:

```bash
npm run build:production
```

### Tests

Run all tests with Karma watcher.

```bash
npm run test
```

If needed, set system variable `TRAVIS=true` to make a single run without Karma watcher.

### Docs generator

This will generate all documentations with generators.

```bash
npm run docs
```

## Production

```bash
npm run start:production
```
