import fs from 'fs';
import path from 'path';
import log from './log';

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

  const defineRouters = definition => {
    if (!definition) return;
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
    defineRouters(definition ? definition.default : definition);
  };

  const items = getItems(src);

  items.filter(isFile).forEach(processFile);

  items.filter(isFolder).forEach(folder => {
    const subItems = getItems(folder);
    subItems.filter(isFile).forEach(processFile);
  });
};

const init = function (app) {
  srcs.forEach(src => load(app, src));
};

export default init;
