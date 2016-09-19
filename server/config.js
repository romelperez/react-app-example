var local;
try { local = require('./local'); } catch (e) {}

const config = {
  "port": 7500,
  "seo": {
    "lang": "en",
    "keywords": "key, words",
    "title": "Page title",
    "site_name": "Site name",
    "description": "Site description",
    "url": "http://site.com",
    "image": "/img/img.jpg",
    "type": "website",
    "twitter": {
      "card": "summary",
      "site": "@romelperez07",
      "creator": "@romelperez07",
    },
  },
  "mongodb": {
    "server": "127.0.0.1",
    "port": 27017,
    "db": "carseller",
    "user": "carseller-user",
    "pwd": "12345678",
  },
  "session": {
    "name": "app",
    "pass": "23456789",
  },
  "api": {
    "private": [
      "GET /cars"
    ],
    "redirectToAppOnLogin": [
      "GET /",
      "GET /terms-and-conditions",
      "GET /login",
      "GET /register"
    ],
  },
};

Object.assign(config, local);

module.exports = config;
