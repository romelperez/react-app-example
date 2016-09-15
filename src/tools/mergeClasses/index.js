/**
 * @module {Function} mergeClasses
 * @description
 * Merge classes names into one string from multiple formats using `classnames`
 * module.
 * @param {*} arguments
 * @return {String}
 */
const mergeClasses = function () {

  let array = [];

  const list = Array.prototype.slice.call(arguments, 0);
  const add = function (cls) {
    const found = array.find(function (item) { return item === cls; });
    if (!found) {
      array.push(cls);
    }
  };
  const rm = function (cls) {
    array = array.filter(item => item !== cls);
  };

  list.forEach(function (item) {
    if (typeof item === 'string') {
      item = item.trim().replace(/\s{2,}/g, ' ');
      item.split(' ').forEach(add);
    }
    else if (typeof item === 'object') {
      for (let p in item) {
        if (item.hasOwnProperty(p)) {
          if (item[p]) {
            add(p);
          } else {
            rm(p);
          }
        }
      }
    }
  });

  return array.join(' ');
};

export default mergeClasses;
