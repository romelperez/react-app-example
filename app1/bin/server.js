const pkg =         require('../package.json');
const express =     require('express');
const nunjucks =    require('nunjucks');
const bodyParser =  require('body-parser');
const requireDir =  require('require-dir');
const ngrok =       require('ngrok');
const log =         require('../api/log');
const urls =        requireDir('../api/urls');

const project = pkg.project;
const dev = process.env.NODE_ENV !== 'production';
const enableTunnel = !!process.env.ENABLE_TUNNEL;
const port = process.env.PORT || project.port;
const app = express();

app.locals = {
  def: project
};

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: dev
});

app.set('views', './views');

app.use((req, res, next) => {
  log.url(`${req.ip} ${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

Object.keys(urls).forEach(name => {
  const path = urls[name].path;
  const route = urls[name].route;
  route(app.route(path));
});

app.use(express.static(__dirname.replace('/bin', '') + '/dist'));
if (dev) {
  app.use(express.static(__dirname.replace('/bin', '') + '/docs'));
}

app.use((req, res) => res.status(404).render('404.html'));
app.use((err, req, res, next) => res.status(err.status || 500).render('500.html'));

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
