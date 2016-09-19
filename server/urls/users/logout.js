export default {
  '/logout': {
    get (req, res, next) {
      req.session = null;
      res.redirect('/');
    }
  }
};
