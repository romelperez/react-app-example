const login = {
  disableHTML5Validation: true,
  fields: [{
    name: 'email',
    required: true,
    validators: {
      isEmail: true,
      isLength: { min: 4, max: 32 },
    }
  }, {
    name: 'password',
    required: true,
    validators: {
      isAlphanumeric: true,
      isLength: { min: 4, max: 32 },
    }
  }]
};

const register = {
  disableHTML5Validation: true,
  fields: [{
    name: 'name',
    required: true,
    validators: {
      isAlphanumericText: true,
      isLength: { min: 4, max: 32 },
    }
  }, {
    name: 'email',
    required: true,
    validators: {
      isEmail: true,
      isLength: { min: 4, max: 32 },
    }
  }, {
    name: 'password',
    required: true,
    validators: {
      isAlphanumeric: true,
      isLength: { min: 4, max: 32 },
    }
  }, {
    name: 'repassword',
    onlyUI: true,
    required: true,
    validators: {
      isEqualToField: 'password',
    }
  }]
};

export default {
  login,
  register
};
