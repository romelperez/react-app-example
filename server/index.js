import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import ngrok from 'ngrok';
import pkg from '../package.json';
import router from './router';
import log from './log';

const project = pkg.project;
const dev = process.env.NODE_ENV !== 'production';
const enableTunnel = !!process.env.ENABLE_TUNNEL;
const port = process.env.PORT || project.port;
const viewsPath = process.cwd() +'/server/views';
const app = express();

log.env();

// Set global variables for views templates to use
app.locals = {
  def: project
};

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
  watch: dev
});
app.use((req, res, next) => {
  log.url(`${req.ip} ${req.method} ${req.url}`);
  next();
});

// Accept HTTP requests body contents
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Register all application routes.
router(app);

app.use(express.static(process.cwd() +'/dist'));
if (dev) {
  app.use('/docs', express.static(process.cwd() +'/docs'));
}

// HTTP 404
app.use((req, res) => res.status(404).render('intern/404.html'));

// HTTP 5XX
app.use((err, req, res, next) => {
  log.error(err.stack);
  res.status(err.status || 500).render('intern/500.html', { content: err.stack });
});

app.listen(port, function (err) {
  if (err) {
    throw err;
  }

  log.info(`Running at http://127.0.0.1:${port}`);

  if (enableTunnel) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return log.error(innerErr);
      }

      log.info(`Running through ngrok at: ${url}`);
    });
  }
});
