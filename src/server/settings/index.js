import base       from './base';
import test       from './test';
import production from './production';

let local;
try {
  local = require('./local');
}
catch (e) {
  local = {};
}

const settings = base;

if (settings.env === 'test') {
  Object.assign(settings, test);
}
else if (settings.env === 'production') {
  Object.assign(settings, production);
}
Object.assign(settings, local);

const mdb = settings.mongodb;
settings.mongodb.url = `mongodb://${mdb.user}:${mdb.pwd}@${mdb.server}/${mdb.db}`;

export default settings;
