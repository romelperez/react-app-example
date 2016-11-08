// NOTE: This file is not ran with Babel.

const winston = require('winston');
const chalk = require('chalk');
const pkg = require(process.cwd() + '/package.json');

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

const log = {};

winston.loggers.add('app', {
  console: {
    level: 'silly',
    colorize: true,
    label: 'App'
  }
});
log.app = winston.loggers.get('app');

winston.loggers.add('db', {
  console: {
    level: 'silly',
    colorize: true,
    label: 'DB'
  }
});
log.db = winston.loggers.get('db');

winston.loggers.add('router', {
  console: {
    level: 'silly',
    colorize: true,
    label: 'Router'
  }
});
log.router = winston.loggers.get('router');

winston.loggers.add('middlewares', {
  console: {
    level: 'silly',
    colorize: true,
    label: 'Middlewares'
  }
});
log.middlewares = winston.loggers.get('middlewares');

log.app.env = function () {
  log.app.info(chalk.bold.green(`Running on "${NODE_ENV}" mode.`));
};

log.app.main = function () {
  log.app.info(chalk.bold.green(`
>>>
>>> Starting: ${pkg.name} v${pkg.version}!
>>> Running on "${NODE_ENV}" mode.
>>>`));
};

module.exports = log;
