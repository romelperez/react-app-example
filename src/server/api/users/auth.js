import bcrypt from 'bcrypt';
import User from 'server/models/User';

export default {

  '/users/login': {
    post (req, res) {

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
            res.json({});
          }
          else {
            res.status(403).json({ message: 'Your password is incorrect.' });
          }
        }).
        catch(function (err) {
          res.status(500).json({ message: String(err) });
        });
    }
  },

  '/users/isauth': {
    get (req, res) {
      if (req.session && req.session.user) {
        res.json({ message: true });
      }
      else {
        res.json({ message: false });
      }
    },
  },
};
