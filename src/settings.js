export default {
  resources: [{
    type: 'CSS',
    path: '//fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic|Open+Sans:400,400italic,600,600italic'
  }, {
    type: 'CSS',
    path: '//cdn.materialdesignicons.com/1.6.50/css/materialdesignicons.min.css'
  }]
};

/**
 * The vulcan validator (vulcanval) creator.
 *
 * This module is a function which receives a {@link settings} object and returns
 * a {@link validator} object to validate {@link map data maps}.
 *
 * Also this has some properties and methods to configure the validations globally.
 *
 * In Node.js environments use like:
 *
 * ```js
 * const vulcanval = require('vulcanval');
 * ```
 *
 * In browser environments this object is available in {@link external:window.vulcanval window.vulcanval}.
 *
 * @module vulcanval
 * @see {@link validator}
 * @example
 * // Changing a global configuration in settings.
 * vulcanval.settings.locale = 'pt';
 *
 * // Addind a new validator method.
 * vulcanval.addValidator('valName', function () { ... });
 *
 * // Extending/creating a new locale/language.
 * vulcanval.extendLocale({ ... });
 *
 * // A form configuration to create a validator.
 * const settings = {
 *   fields: [{
 *     name: 'fieldName',
 *     validators: {}
 *   }]
 * };
 *
 * // Creating a validator from settings.
 * const validator = vulcanval(settings);
 *
 * // A data map to validate.
 * const map = {
 *   fieldName: 'field value'
 * };
 *
 * // Validating the map with the validator.
 * const result = validator.validate(map);
 */

/**
 * Add a custom validator globally.
 *
 * All validators in the package {@link https://www.npmjs.com/package/validator validator}
 * are installed and ready to use.
 *
 * @method
 * @name addValidator
 * @memberof module:vulcanval
 *
 * @param {String} name - An alphanumeric validator name.
 * @param {Function} validator - The validator function. Receives as a first parameter
 * the value of the field and has to return a
 * {@link https://developer.mozilla.org/en-US/docs/Glossary/Truthy truthy value}.
 * This function will have the {@link utilityContext utility context} as
 * function context. Don't pass
 * {@link https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions arrow functions}.
 *
 * @example
 * vulcanval.addValidator('isGreat', function (value) {
 *   return value.length > 4 && value.indexOf('great') >= 0;
 * });
 *
 * const map = {
 *   field0: 'normal value'
 * };
 *
 * const settings = {
 *   msgs: {
 *     isGreat: 'This field needs to be great!'
 *   },
 *   fields: [{
 *     name: 'field0',
 *     validators: {
 *       isGreat: true
 *     }
 *   }]
 * };
 *
 * const vv = vulcanval(settings);
 *
 * const field0Valid = vv.validateField('field0', map);
 * console.log(field0Valid); // 'This field needs to be great!'
 *
 * @see In the example is used the {@link validator.validateField validator.validateField}
 * static method to test the new validator.
 */
