import express from 'express';
import nunjucks from 'nunjucks';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import ngrok from 'ngrok';
import settings from './settings';
import log from './log';
import dbms from './dbms';
import router from './router';

const dev = process.env.NODE_ENV !== 'production';
const enableTunnel = !!process.env.ENABLE_TUNNEL;
const port = process.env.PORT || settings.port;
const viewsPath = process.cwd() +'/server/views';
const app = express();

log.app.env();

app.locals = {
  def: settings
};

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
  watch: dev
});
app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dbms(function () {

  router(app);

  app.listen(port, function (err) {
    if (err) {
      throw err;
    }

    log.app.info(`Running at http://127.0.0.1:${port}.`);

    if (enableTunnel) {
      ngrok.connect(port, (innerErr, url) => {
        if (innerErr) {
          return log.app.error(innerErr);
        }

        log.app.info(`Running through ngrok at: ${url}.`);
      });
    }
  });
});
