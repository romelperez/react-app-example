import bcrypt       from 'bcrypt';
import vulcanval    from 'vulcanval';
import User         from '../../models/User';
import validators   from 'tools/validators';

export default {

  '/api/users/register': {
    post (req, res, next) {

      const vv =        vulcanval(validators.register);
      const invalids =  vv.validate(req.body);
      const map =       vv.cleanMap(false, req.body);

      if (invalids) {
        return res.status(400).json({ message: 'Data is invalid.' });
      }

      const query = { email: map.email };

      User.findOne(query).exec().then(function (user) {
        if (user) {
          return Promise.reject('The email is already taken.');
        }
      }).
      then(function () {

        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(map.password, salt);

        map.hash = hash;

        const user = new User(map);

        return user.save();
      }).
      then(function () {
        res.json({ success: true });
      }).
      catch(function (err) {
        res.status(500).json({ message: String(err) });
      });
    }
  },
};
