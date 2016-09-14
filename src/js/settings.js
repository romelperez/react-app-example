import S from 'string';

/**
 * @module {Object} settings
 * @description
 * Global static project settings.
 */
const settings = {

  api: '/',

  resources: [{
    type: 'CSS',
    path: '//fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic|Open+Sans:400,400italic,600,600italic'
  }, {
    type: 'CSS',
    path: '//cdn.materialdesignicons.com/1.6.50/css/materialdesignicons.min.css'
  }]
};

settings.api = S(settings.api).chompRight('/').s;

export default settings;
