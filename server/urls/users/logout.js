export default {
  '/logout': {
    get (req, res, next) {
      res.redirect('/');
    }
  }
};
