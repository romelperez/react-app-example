import User from '../../models/User';

export default {

  '/api/users/current': {
    get (req, res, next) {
      if (req.session.user) {

        const query = { _id: req.session.user };
        const projection = { hash: false };

        User.
          findOne(query, projection).
          exec().
          then(function (user) {
            res.json(user);
          }).
          catch(function (err) {
            res.status(500).json({ message: String(err) });
          });
      }
      else {
        res.status(403).json({ message: 'Unauthorized.' });
      }
    },
  },
};
