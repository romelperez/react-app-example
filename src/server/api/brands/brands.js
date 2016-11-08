import Brand from 'server/models/Brand';

export default {

  '/brands': {
    get (req, res) {
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
