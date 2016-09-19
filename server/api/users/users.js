import bcrypt from 'bcrypt';
import User from '../../models/User';

export default {

  '/api/users': {
    get (req, res, next) {

      const query = {};
      const projection = { hash: false };

      User.
        find(query, projection).
        exec().
        then(function (users) {
          res.json(users);
        }).
        catch(function (err) {
          res.status(500).json({ message: String(err) });
        });
    },
  },
};
