import Car from 'server/models/Car';

export default {

  '/cars': {
    get (req, res) {
      Car.
        find({}).
        exec().
        then(function (cars) {
          res.json(cars);
        }).
        catch(function (err) {
          return res.status(500).json({ message: String(err) });
        });
    }
  },
};
