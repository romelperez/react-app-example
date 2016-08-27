const Log = require('prhone-log');

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

Log.defaults.displayTime = true;

const log = {};

log.app = new Log('App');
log.db = new Log('Database');
log.router = new Log('Router');

log.app.env = () => log.app.info(`Running on "${NODE_ENV}" mode.`);

module.exports = log;
