import fs from 'fs';
import path from 'path';
import express from 'express';
import log from './log';

const dev = process.env.NODE_ENV !== 'production';
const staticFolder = '/dist';
const docsFolder = '/docs';
const srcs = [
  path.join(process.cwd(), '/server/urls'),
  path.join(process.cwd(), '/server/api')
];

const load = function (app, src) {

  const getItems = dirPath => {
    return fs.readdirSync(dirPath).map(item => {
      return path.join(dirPath, item);
    });
  };
  const isFolder = itemPath => fs.statSync(itemPath).isDirectory();
  const isFile = itemPath => !isFolder(itemPath);

  const defineRouters = (filePath, definition) => {
    if (!definition) {
      return log.router.warn(`File "${filePath}" does not have proper URL definition`);
    }
    Object.keys(definition).forEach(function (url) {
      const route = app.route(url);
      const verbs = definition[url];

      Object.keys(verbs).forEach(function (verb) {
        route[verb].call(route, verbs[verb]);
      });
    });
  };

  const processFile = filePath => {
    const definition = require(filePath);
    defineRouters(filePath, definition ? definition.default : definition);
  };

  const items = getItems(src);

  items.filter(isFile).forEach(processFile);

  items.filter(isFolder).forEach(folder => {
    const subItems = getItems(folder);
    subItems.filter(isFile).forEach(processFile);
  });
};

const init = function (app) {

  log.router.debug('Loading routers...');

  srcs.forEach(src => load(app, src));

  // Static files
  app.use(express.static(process.cwd() + staticFolder));

  // Docs folder
  if (dev) {
    app.use('/docs', express.static(process.cwd() + docsFolder));
  }

  // HTTP 404
  app.use((req, res) => res.status(404).render('intern/404.html'));

  // HTTP 5XX
  app.use((err, req, res, next) => {
    log.router.error(err.stack);
    res.status(err.status || 500).render('intern/500.html', { content: err.stack });
  });

  log.router.info('Routers loaded.');
};

export default init;
