const Log = require('prhone-log');

Log.addLevel({
  name: 'URL',
  scale: 3,
  method: 'url',
  console: 'log',
  color: Log.COLOR.YELLOW
});

Log.addLevel({
  name: 'DB',
  scale: 3,
  method: 'db',
  console: 'log',
  color: Log.COLOR.MAGENTA
});

const log = new Log('CarSeller', {
  displayTime: true,
  displayNamespace: false
});

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

log.env = function () {
  log.info(`Running on "${NODE_ENV}" mode`);
};

module.exports = log;
