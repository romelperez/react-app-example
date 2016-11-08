import bcrypt       from 'bcrypt';
import vulcanval    from 'vulcanval';
import User         from 'server/models/User';
import validators   from 'shared/tools/validators';

export default {

  '/users/register': {
    post (req, res) {

      const vv = vulcanval(validators.register);
      const invalids = vv.validate(req.body);
      const map = vv.cleanMap(false, req.body);

      if (invalids) {
        res.status(400).json({ message: 'Data is invalid.' });
        return;
      }

      const query = { email: map.email };

      User.
        findOne(query).
        exec().
        then(function (user) {
          if (user) {
            return Promise.reject('The email is already taken.');
          }
          return Promise.resolve();
        }).
        then(function () {

          const salt = bcrypt.genSaltSync();
          const hash = bcrypt.hashSync(map.password, salt);

          map.hash = hash;

          const user = new User(map);

          return user.save();
        }).
        then(function () {
          res.json({ message: true });
        }).
        catch(function (err) {
          res.status(500).json({ message: String(err) });
        });
    }
  },
};
