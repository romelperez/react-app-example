import nunjucks         from 'nunjucks';
import morgan           from 'morgan';
import bodyParser       from 'body-parser';
import session          from 'cookie-session';
import consts           from 'shared/consts';
import settings         from 'server/settings';
import log              from 'server/log';
import getURLDefinition from 'server/tools/getURLDefinition';

const baseMiddlewares = function (server) {

  log.middlewares.debug('Setting up base middlewares...');

  nunjucks.configure(settings.api.viewsPath, {
    autoescape: true,
    express: server,
    watch: settings.dev
  });

  server.use(morgan('short'));
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(session({
    name: settings.session.name,
    secret: settings.session.pass,
  }));
};

const redirectToLoginOnPrivate = function (server) {

  log.middlewares.debug('Setting up private paths...');

  settings.api.private.forEach(function (definition) {
    if (!definition) return;

    const { method, path } = getURLDefinition(definition);

    server[method](path, function (req, res, next) {

      if (!req.session.user) {
        res.redirect(consts.ROUTE.LOGIN);
      }
      else {
        next();
      }
    });
  });
};

const redirectToAppOnLogin = function (server) {

  log.middlewares.debug('Setting up redirects to application on user logged...');

  settings.api.redirectToAppOnLogin.forEach(function (definition) {
    if (!definition) return;

    const { method, path } = getURLDefinition(definition);

    server[method](path, function (req, res, next) {

      if (req.session.user) {
        res.redirect(consts.ROUTE.APP);
      }
      else {
        next();
      }
    });
  });
};

const middlewares = function (server) {

  log.middlewares.info('Initializing...');

  baseMiddlewares(server);
  redirectToLoginOnPrivate(server);
  redirectToAppOnLogin(server);

  log.middlewares.info('Done.');
};

export default middlewares;
