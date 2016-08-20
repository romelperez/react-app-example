import fs from 'fs';
import path from 'path';
import log from './log';

const src = path.join(__dirname, '/api/urls');

export default function (app) {

  fs.readdirSync(src).
    filter(file => fs.statSync(path.join(src, file)).isDirectory()).
    forEach(folder => {
      const definition = require(src +'/'+ folder).default;

      Object.keys(definition).forEach(function (location) {
        const route = app.route(location);
        const verbs = definition[location];

        Object.keys(verbs).forEach(function (verb) {
          route[verb].call(route, verbs[verb]);
        });
      });
    });
};
