import fs   from 'fs';
import path from 'path';
import log  from 'server/log';

const getShortPath = (src = '') => src.replace(process.cwd(), '');

const gatherRoutes = function (server, { mount, folder }) {

  const getItems = dirPath => {
    try {
      return fs.readdirSync(dirPath).map(item => {
        return path.join(dirPath, item);
      });
    }
    catch (e) {
      log.router.warn(`Folder "${getShortPath(dirPath)}" was not found.`);
      return [];
    }
  };
  const isFolder = itemPath => fs.statSync(itemPath).isDirectory();
  const isFile = itemPath => !isFolder(itemPath);

  const defineRouters = (filePath, definition) => {

    if (!definition) {
      log.router.error(`File "${getShortPath(filePath)}" does not have proper URL definition.`);
      return;
    }

    Object.keys(definition).forEach(function (url) {
      const route = server.route((mount || '') + url);
      const verbs = definition[url];

      Object.keys(verbs).forEach(function (verb) {
        route[verb].call(route, verbs[verb]);
      });
    });
  };

  const processFile = (filePath) => {

    log.router.debug(`Processing file "${getShortPath(filePath)}"...`);

    let definition;
    try {
      definition = require(filePath);
    }
    catch (err) {
      log.router.error(err.stack);
    }

    if (definition) {
      defineRouters(filePath, definition ? definition.default : definition);
    }
  };

  // Get direct children items from folder.
  const items = getItems(folder);

  // Process direct files.
  items.filter(isFile).forEach(processFile);

  // Process direct folders.
  items.filter(isFolder).forEach(folderItem => {
    const subItems = getItems(folderItem);
    subItems.filter(isFile).forEach(processFile);
  });
};

export default gatherRoutes;
