import Car from '../../models/Car';

export default {

  '/api/cars': {
    get (req, res, next) {
      Car.
        find({}).
        exec().
        then(function (cars) {
          res.json({ data: cars });
        }).
        catch(function (err) {
          return res.status(500).json({ message: String(err) });
        });
    }
  },
};
