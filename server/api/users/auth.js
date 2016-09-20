import bcrypt from 'bcrypt';
import User from '../../models/User';

export default {

  '/api/users/login': {
    post (req, res, next) {

      const { email, password } = req.body;
      const query = { email };
      const projection = {};

      User.
        findOne(query, projection).
        exec().
        then(function (user) {
          if (!user) {
            res.status(400).json({ message: 'Your email was not found.' });
          }
          return user;
        }).
        then(function (user) {
          if (!user) return;

          const correct = bcrypt.compareSync(password, user.hash);
          if (correct) {
            req.session.user = user._id;
            res.json({ success: true });
          } else {
            res.status(403).json({ message: 'Your password is incorrect.' });
          }
        }).
        catch(function (err) {
          res.status(500).json({ message: String(err) });
        });
    }
  },

  '/api/users/isauth': {
    get (req, res, next) {
      if (req.session && req.session.user) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    },
  },
};
