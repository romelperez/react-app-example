import S        from 'string';
import consts   from 'consts';
import config   from './config';
import log      from './log';

const getDefinition = function (definition) {

  const info =    definition.trim().replace(/\s/g, ' ').split(' ');
  const method =  info[0].toLowerCase();
  const path =    S(info[1]).ensureLeft('/');

  return { method, path };
};

const redirectToLoginOnPrivate = function (app) {

  log.middleware.debug('Defining private paths...');

  config.api.private.forEach(function (definition) {
    if (!definition) return;

    const { method, path } = getDefinition(definition);

    app[method](path, function (req, res, next) {

      if (!req.session.user) {
        res.redirect(consts.ROUTE.LOGIN);
      } else {
        next();
      }
    });
  });
};

const redirectToAppOnLogin = function (app) {

  log.middleware.debug('Defining redirects to application on user logged...');

  config.api.redirectToAppOnLogin.forEach(function (definition) {
    if (!definition) return;

    const { method, path } = getDefinition(definition);

    app[method](path, function (req, res, next) {

      if (req.session.user) {
        res.redirect(consts.ROUTE.APP);
      } else {
        next();
      }
    });
  });
};

const middleware = function (app) {

  log.middleware.debug('Initializing...');

  redirectToLoginOnPrivate(app);
  redirectToAppOnLogin(app);

  log.middleware.info('Configured.');
};

export default middleware;
