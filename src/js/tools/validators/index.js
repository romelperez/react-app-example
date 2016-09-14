import vulcanval from 'vulcanval';

vulcanval.addValidator('isAppEmail', function (value, opts) {
  return this.isEmail(value) && this.isLength(value, { min: 4, max: 32 });
});

vulcanval.addValidator('isAppPassword', function (value, opts) {
  return this.isAlphanumeric(value) && this.isLength(value, { min: 4, max: 32 });
});
