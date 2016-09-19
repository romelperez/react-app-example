import express    from 'express';
import nunjucks   from 'nunjucks';
import morgan     from 'morgan';
import bodyParser from 'body-parser';
import session    from 'cookie-session';
import ngrok      from 'ngrok';
import config     from './config';
import log        from './log';
import dbms       from './dbms';
import router     from './router';
import middleware from './middleware';

const dev =       process.env.NODE_ENV !== 'production';
const isTunnel =  !!process.env.ENABLE_TUNNEL;
const port =      process.env.PORT || config.port;
const viewsPath = process.cwd() +'/server/views';
const app =       express();

log.app.env();

app.locals = {
  def: config
};

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
  watch: dev
});
app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  name: config.session.name,
  secret: config.session.pass,
}));

dbms(function () {

  middleware(app);
  router(app);

  app.listen(port, function (err) {
    if (err) {
      throw err;
    }

    log.app.info(`Running at http://127.0.0.1:${port}.`);

    if (isTunnel) {
      ngrok.connect(port, (innerErr, url) => {
        if (innerErr) {
          return log.app.error(innerErr);
        }

        log.app.info(`Running through ngrok at: ${url}.`);
      });
    }
  });
});
