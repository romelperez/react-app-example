import Brand from '../../models/Brand';

export default {

  '/api/brands': {
    get (req, res, next) {
      Brand.
        find({}).
        exec().
        then(function (brands) {
          res.json(brands);
        }).
        catch(function (err) {
          return res.status(500).json({ message: String(err) });
        });
    }
  },
};
