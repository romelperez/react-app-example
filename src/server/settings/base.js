export default {
  'env': process.env.NODE_ENV || 'development',
  'dev': process.env.NODE_ENV !== 'production',
  'tunnel': !!process.env.ENABLE_TUNNEL,
  'host': '127.0.0.1',
  'port': process.env.PORT || 7000,
  'seo': {
    'lang': 'en',
    'keywords': 'key, words',
    'title': 'Page title',
    'site_name': 'Site name',
    'description': 'Site description',
    'url': 'http://site.com',
    'image': '/img/img.jpg',
    'type': 'website',
    'twitter': {
      'card': 'summary',
      'site': '@romelperez07',
      'creator': '@romelperez07',
    },
  },
  'mongodb': {
    'url': null,
    'server': '127.0.0.1',
    'port': 27017,
    'db': 'carseller',
    'user': 'carseller-user',
    'pwd': '12345678',
  },
  'session': {
    'name': 'app',
    'pass': '23456789',
  },
  'api': {
    'viewsPath': process.cwd() + '/src/server/views',
    'publicPath': process.cwd() + '/public',
    'docsPath': process.cwd() + '/docs',
    'srcs': [{
      mount: '',
      folder: process.cwd() + '/bundle/server/pages'
    }, {
      mount: '/api',
      folder: process.cwd() + '/bundle/server/api'
    }],
    'private': [
      'GET /cars'
    ],
    'redirectToAppOnLogin': [
      'GET /',
      'GET /terms-and-conditions',
      'GET /login',
      'GET /register'
    ],
  },
};
