import mongoose from 'mongoose';
import log from './log';
import settings from '../settings';

mongoose.Promise = global.Promise;

const dbms = function (callback=function(){}) {

  const { user, pwd, server, port, db } = settings.mongodb;

  log.db.debug(`Connecting with database "${db}"...`);

  mongoose.connect(`mongodb://${user}:${pwd}@${server}:${port}/${db}`, function (err) {
    if (err) {
      log.db.error(`Could not connect with database "${db}".`);
      throw err;
    }

    log.db.info(`Connected with database "${db}" successfully.`);

    callback();
  });
};

export default dbms;
