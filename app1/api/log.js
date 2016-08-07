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

module.exports = log;
